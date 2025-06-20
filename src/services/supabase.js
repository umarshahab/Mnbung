import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

console.log("✅ supabaseUrl:", supabaseUrl)
console.log("✅ supabaseKey:", supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey)

// Ambil semua grup
export const fetchGrup = async () => {
  const { data, error } = await supabase.from('grup_tabungan').select('*')
  if (error) throw error
  return data
}

// Ambil tabungan berdasarkan grup_id
export const fetchTabunganByGrup = async (grupId) => {
  const { data, error } = await supabase
    .from('tabungan')
    .select('*')
    .eq('grup_id', grupId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Tambah tabungan baru
export const insertTabungan = async (payload) => {
  const { data, error } = await supabase.from('tabungan').insert([payload])
  if (error) throw error
  return data
}

// Upload file bukti ke bucket Supabase
export const uploadBukti = async (file, filename) => {
  const { data, error } = await supabase.storage
    .from('bukti')
    .upload(filename, file)

  if (error) throw error
  return data
}



