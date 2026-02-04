#!/usr/bin/env node

/**
 * Script para verificar se as variáveis de ambiente estão sendo injetadas corretamente
 */

console.log('🔍 Verificando variáveis de ambiente do Vite:\n');

const envVars = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY'
];

let allSet = true;

envVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✓ ${varName}: ${value.substring(0, 5)}...`);
  } else {
    console.log(`✗ ${varName}: NOT SET`);
    allSet = false;
  }
});

console.log('\n' + (allSet ? '✅ Todas as variáveis estão definidas!' : '❌ Algumas variáveis estão faltando!'));

process.exit(allSet ? 0 : 1);
