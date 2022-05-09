export async function fetchCourses(signal?:AbortSignal) {
     const url = `${process.env.BASE_URL}/courses`;
     const res = await fetch(url, {
         headers: {
             Accept: 'application/json',
         },
         signal
     });

     return await  res.json();
 }
