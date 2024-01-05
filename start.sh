#!/bin/bash

# Script para levantar el proyecto fullstack

# Ruta del directorio root
ROOT_DIR="$(pwd)"

# Ruta del backend
BACKEND_DIR="${ROOT_DIR}/backend"

# Ruta del frontend
FRONTEND_DIR="${ROOT_DIR}/frontend"

# Configuración de la base de datos
DB_USERNAME="note"
DB_PASSWORD="note"
DB_NAME="notes"

# Crear la base de datos
psql -U postgres -c "CREATE DATABASE $DB_NAME;"
psql -U postgres -c "CREATE USER $DB_USERNAME WITH PASSWORD '$DB_PASSWORD';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USERNAME;"
psql -U postgres -c "ALTER USER $DB_USERNAME WITH SUPERUSER;"

# Instalar dependencias en el backend
echo "Instalando dependencias del backend..."
cd "${BACKEND_DIR}" || exit
npm install

# Levantar el backend
echo "Iniciando el backend..."
npm run start:dev &

sleep 5

# Instalar dependencias en el frontend
echo "Instalando dependencias del frontend..."
cd "${FRONTEND_DIR}" || exit
npm install

# Levantar el frontend
echo "Iniciando el frontend..."
npm run dev