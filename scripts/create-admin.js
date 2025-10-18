const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdminUser() {
  try {
    // Controlla se esiste già un admin
    const existingAdmin = await prisma.user.findFirst({
      where: { role: 'admin' }
    })

    if (existingAdmin) {
      console.log('Admin user already exists')
      return
    }

    // Crea l'hash della password
    const hashedPassword = await bcrypt.hash('admin123', 12)

    // Crea l'utente admin
    const admin = await prisma.user.create({
      data: {
        email: 'admin@studiolegale.it',
        password: hashedPassword,
        role: 'admin'
      }
    })

    console.log('Admin user created:', admin.email)
  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdminUser()