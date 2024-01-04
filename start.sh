#!/bin/bash

# Script para levantar el proyecto fullstack

# Ruta del directorio root
ROOT_DIR="$(pwd)"

# Ruta del backend
BACKEND_DIR="${ROOT_DIR}/backend"

# Ruta del frontend
FRONTEND_DIR="${ROOT_DIR}/frontend"

# Instalar dependencias en el backend
echo "Instalando dependencias del backend..."
cd "${BACKEND_DIR}" || exit
pnpm install

# Levantar el backend
echo "Iniciando el backend..."
pnpm run start &

# Instalar dependencias en el frontend
echo "Instalando dependencias del frontend..."
cd "${FRONTEND_DIR}" || exit
pnpm install



# Levantar el frontend
echo "Iniciando el frontend..."
pnpm run dev
