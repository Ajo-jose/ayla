'use client'
import { useEffect } from 'react'
import { initAll } from '../lib/effects'

export default function Effects() {
  useEffect(() => { initAll() }, [])
  return null
}
