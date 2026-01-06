"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useTranslations } from "@/contexts/TranslationContext";

export default function BookingPage() {
  const { t, currentLang } = useTranslations();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    message: "",
  });

  const fieldLabels = {
    fullName: t("booking.fullName"),
    email: t("booking.email"),
    company: t("booking.company"),
    phone: t("booking.phone"),
    subject: t("booking.subject"),
    message: t("booking.message"),
    privacyAccepted: t("booking.privacyLabel"),
  } as const;

  const placeholders = {
    fullName: t("booking.placeholders.fullName"),
    email: t("booking.placeholders.email"),
    company: t("booking.placeholders.company"),
    phone: t("booking.placeholders.phone"),
    subject: t("booking.placeholders.subject"),
    message: t("booking.placeholders.message"),
  } as const;

  const isValidEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPhone = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "");
    if (cleaned.length < 7) return false;
    const phoneRegex = /^[+()0-9\s-]+$/;
    return phoneRegex.test(value);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation with detailed fields
    const trimmed = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    const errors: string[] = [];

    if (!trimmed.fullName || trimmed.fullName.length < 2) {
      errors.push(
        `${t("booking.fullName")}: ${
          trimmed.fullName
            ? t("booking.validationReasons.minLength")
            : t("booking.validationReasons.required")
        }`
      );
    }

    if (!trimmed.email || !isValidEmail(trimmed.email)) {
      errors.push(
        `${t("booking.email")}: ${
          trimmed.email
            ? t("booking.validationReasons.invalidEmail")
            : t("booking.validationReasons.required")
        }`
      );
    }

    if (trimmed.company && trimmed.company.length < 2) {
      errors.push(
        `${t("booking.company")}: ${t("booking.validationReasons.minLength")}`
      );
    }

    if (!trimmed.subject || trimmed.subject.length < 3) {
      errors.push(
        `${t("booking.subject")}: ${
          trimmed.subject
            ? t("booking.validationReasons.minLength")
            : t("booking.validationReasons.required")
        }`
      );
    }

    if (!trimmed.message || trimmed.message.length < 5) {
      errors.push(
        `${t("booking.message")}: ${
          trimmed.message
            ? t("booking.validationReasons.minLength")
            : t("booking.validationReasons.required")
        }`
      );
    }

    if (!trimmed.phone || !isValidPhone(trimmed.phone)) {
      errors.push(
        `${t("booking.phone")}: ${
          trimmed.phone
            ? t("booking.validationReasons.invalidPhone")
            : t("booking.validationReasons.required")
        }`
      );
    }

    if (!formData.privacyAccepted) {
      errors.push(t("booking.validationReasons.privacy"));
    }

    if (errors.length > 0) {
      setDialog({
        open: true,
        title: t("booking.dialog.errorTitle"),
        message: `${t("booking.validationHeader")}\n${errors
          .map((err) => `- ${err}`)
          .join("\n")}`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...trimmed,
          privacyAccepted: formData.privacyAccepted,
          lang: currentLang,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          privacyAccepted: false,
        });
        setDialog({
          open: true,
          title: t("booking.dialog.successTitle"),
          message: t("booking.successMessage"),
        });
        // Reset message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        const data = await response.json().catch(() => null);
        const fields = data?.fields as string[] | undefined;
        const serverError = data?.error as string | undefined;

        const message = fields?.length
          ? `${t("booking.validationHeader")}\n${fields
              .map(
                (f) => `- ${fieldLabels[f as keyof typeof fieldLabels] ?? f}`
              )
              .join("\n")}`
          : serverError || t("booking.dialog.unknownError");

        setSubmitStatus("error");
        setDialog({
          open: true,
          title: t("booking.dialog.errorTitle"),
          message,
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? `${t("booking.dialog.unknownError")}\n${error.message}`
          : t("booking.dialog.unknownError");
      setSubmitStatus("error");
      setDialog({
        open: true,
        title: t("booking.dialog.errorTitle"),
        message: fallbackMessage,
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>{t("common.back")}</span>
          </Link>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t("booking.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("booking.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  {t("booking.successMessage")}
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  {t("booking.errorMessage")}
                </p>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                {t("booking.fullName")}
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder={placeholders.fullName}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                {t("booking.email")}
                <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={placeholders.email}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                {t("booking.company")}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder={placeholders.company}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                {t("booking.phone")}
                <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={placeholders.phone}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                {t("booking.subject")}
                <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={placeholders.subject}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                {t("booking.message")}
                <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={placeholders.message}
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                className="w-5 h-5 mt-0.5 cursor-pointer border-border rounded focus:ring-2 focus:ring-primary accent-primary"
              />
              <label
                htmlFor="privacyAccepted"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {t("booking.privacyLabel")}
                <span className="text-primary">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("booking.submitting") : t("booking.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* Dialog Overlay */}
      {dialog.open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-card border border-border rounded-lg shadow-xl max-w-lg w-full p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                {dialog.title}
              </h3>
              <pre className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed">
                {dialog.message}
              </pre>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setDialog({ ...dialog, open: false })}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                {t("booking.dialog.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
