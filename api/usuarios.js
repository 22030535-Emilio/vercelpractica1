import { supabase } from '../lib/supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  const { method, query } = req;
  
  if (method === 'GET') {
    // Si se pasa ?id=N devuelve ese usuario
    if (query.id) {
      const { data: usuario, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('id', parseInt(query.id))
        .single();
        
      if (error || !usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      return res.status(200).json(usuario);
    }
    
    // Devuelve todos los usuarios
    const { data: usuarios, error } = await supabase.from('usuarios').select('*');
    if (error) {
       return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(usuarios);
  }
  
  // Método no permitido
  res.setHeader('Allow', ['GET']);
  res.status(405).json({ error: `Método ${method} no permitido` });
}