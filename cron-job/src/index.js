const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');

cron.schedule('*',async()=>{
  console.log(`Datos cargados en la BD fecha: ${new Date().toLocaleString()}`);
  const html = await axios.get('http://localhost:3000/');
  const $ = cheerio.load(html.data);
  const filas = $("tbody tr");
  const arreglo = [];


  //Filas obteniendo 

  
  filas.each((i, e)=>{
    const fila = $(e).text().toString().trim();
    const datos = fila.split('\n');
    const retiro = {
      FechaInicio: datos[0].trim(),
      Tipodeservicio: datos[1].trim(),
      Mesescontratados : datos[2].trim(),
      Totalcontrato: datos[3].trim(),
      Mesestranscurrido: datos[4].trim(),
      Totalabono: datos[5].trim(),
    }
    arreglo.push(contratoparatv);
  });


  await arreglo.forEach(async(e) =>{
    await axios.post('http://localhost:3000/api', e)
  }) 
})
