
// Arreglos  

let radiologia = [
  {// Info de pacientes agendados seccion Radiología
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
    atencion : "Radiología" // primer paciente  Radiología

  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
    atencion : "Radiología"
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
    atencion : "Radiología"
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
    atencion : "Radiología"
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
    atencion : "Radiología"// último paciente  Radiología
  }
];

  let radioConsulta = radiologia.length;





  
  let traumatologia = [
    {// Info de pacientes agendados seccion Traumatología
      hora: "08:00am",
      especialista: "MARIA PAZ ACHURRA",
      paciente: "PAULA SANCHEZ",
       rut: "15554774-5", 
      prevision: "FONASA",
      atencion : "Traumatologia"// primer paciente  Traumatología
    },
    {
      hora: "10:00am",
      especialista: "RAUL ARAYA",
      paciente: "ANGÉLICA NAVAS",
       rut: "15444147-9",
      prevision: "ISAPRE",
      atencion : "Traumatologia"
    },
    {
      hora: "10:30am",
      especialista: "MARIA ARRIAGADA",
      paciente: "ANA KLAPP",
       rut: "17879423-9",
      prevision: "ISAPRE",
      atencion : "Traumatologia"
    },
    {
      hora: "11:00am",
      especialista: "ALEJANDO BADILLA",
      paciente: "FELIPE MARDONES",
       rut: "1547423-6",
      prevision: "ISAPRE",
      atencion : "Traumatologia"
    },
    {
      hora: "11:30am",
      especialista: "CECILIA OPAZO",
      paciente: "DIEGO MARRE",
       rut: "16554741-K",
      prevision: "FONASA",
      atencion : "Traumatologia"
    },
    {
      hora: "12:00pm",
      especialista: "ARTURO VIDAL",
      paciente: "CECILIA MENDEZ",
       rut: "9747535-8",
      prevision: "ISAPRE",
      atencion : "Traumatologia"
    },
    {
      hora: "12:30pm",
      especialista: "ANDRES KANACRI",
      paciente: "MARCIAL SUAZO",
       rut: "11254785-5",
      prevision: "ISAPRE",
      atencion : "Traumatologia"  // último paciente  Traumatología
    }
    
  ];
  let traumaConsulta = traumatologia.length;


  let dental = [
    {// Info de pacientes agendados seccion Odontológia - Dental 
      hora: "8:30",
      especialista: "ANDREA ZUÑIGA",
      paciente: "MARCELA RETAMAL",
      rut: "11123425-6",
      prevision: "ISAPRE",
      atencion : "Odontológica" // primer paciente  odontológia - Dental 
    },
    {
      hora: "11:00",
      especialista: "MARIA PIA ZAÑARTU",
      paciente: "ANGEL ORMEÑO",
      rut: "17669222-2",
      prevision: "ISAPRE",
      atencion : "Odontológica"
    },
    {
      hora: "11:30",
      especialista: "GABRIEL BORIC",
      paciente: "MARIO SIMBORDES",
      rut: "7998789-5",
      prevision: "FONASA",
      atencion : "Odontológica"
    },
    {
      hora: "13:00",
      especialista: "FRANCISCO BANHEISEN",
      paciente: "KARIN HERNANDEZ",
      rut: "18887662-k",
      prevision: "FONASA",
      atencion : "Odontológica"
    },
    {
      hora: "13:30",
      especialista: "EDUARDO CIENFUEGOS",
      paciente: "HUGO RAMIRO",
      rut: "17665461-4",
      prevision: "FONASA",
      atencion : "Odontológica"
    },
    {
      hora: "14:00",
      especialista: "RAQUEL VILLASECA",
      paciente: "ANA SEPULVEDA",
      rut: "17665461-4",
      prevision: "ISAPRE" ,
      atencion : "Odontológica"
        // último paciente  odontólogia - Dental 
    }
  ];
  let dentalConsulta = dental.length;





  //Horas atendidas 

  traumatologia.push(
    {
      hora: "9:00",
      especialista: "RENÉ POBLETE",
      paciente: "ANA GELLONA",
      rut: "13123329-7",
      prevision: "ISAPRE",
      atencion : "Traumatologia"
    },
    {
      hora: "9:30",
      especialista: "MARIA SOLAR",
      paciente: "RAMIRO ANDRADE",
      rut: "12221451-K",
      prevision: "FONASA",
      atencion : "Traumatologia"
    },
    {
      hora: "10:00",
      especialista: "RAUL LOYOLA",
      paciente: "CARMEN ISLA",
      rut: "10112348-3",
      prevision: "ISAPRE",
      atencion : "Traumatologia"

    },
    {
      hora: "10:30",
      especialista: "ANTONIO LARENAS",
      paciente: "PABLO LOAYZA",
      rut: "13453234-1",
      prevision: "ISAPRE",
      atencion : "Traumatologia"
    },
    {
      hora: "12:00",
      especialista: "MATIAS ARAVENA",
      paciente: "SUSANA POBLETE",
      rut: "14345656-6",
      prevision: "FONASA",
      atencion : "Traumatologia"
    }
  );

// Titulo horas Solicitadas
document.write("<h3>Horas Agendadas </h3>")  
  


//Cantidad de consultas solicitadas Radiologia
  
  document.write(
    `Cantidad de consultas para radiología: ${radioConsulta} </br>`
  );

  //Cantidad de consultas solicitadas Odontologia - Dental
  document.write(
    `Cantidad de consultas para dental: ${dentalConsulta} </br>`
  );

  //Cantidad de consultas solicitadas Traumatologia
  document.write(
    `Cantidad de consultas para traumatología: ${traumaConsulta} </br>`
  );


//Titulo Horas de Radiologia
  document.write("<h3>Horas de Radiologia </h3>") 


// Primer y última consulta de RADIOLOGIA PACIENTE 
  document.write(
    `Nombre Primer Paciente ${radiologia[0].paciente} - 
     Hora De Atención  : ${radiologia[0].hora} -
     Cobertura Previsional : ${  radiologia[0].prevision} |
     Rut : ${radiologia[0].rut} </br>

     Nombre Último paciente ${radiologia[radioConsulta - 1].paciente} - 
     Hora De Atención  : ${radiologia[radioConsulta -1].hora} -
     Cobertura Previsional : ${ radiologia[radioConsulta - 1].prevision}  |
     Rut : ${radiologia[radioConsulta - 1].rut}

     <br />`
  );


//Horas dentales solicitadas
document.write("<h3>Horas Dentales </h3>")


// Primer y última consulta de Odontologia - Dental PACIENTE 
  document.write(
    
     `Nombre Primer Paciente : ${dental[0].paciente} -
      Hora De Atención  : ${dental[0].hora} -
      Cobertura Previsional :  ${ dental[0].prevision  } |
      Rut : ${dental[0].rut} </br>

       Nombre Último paciente : ${ dental[dentalConsulta - 1].paciente} -
       Hora De Atención  : ${dental[dentalConsulta -1].hora} -
       Cobertura Previsional : ${ dental[dentalConsulta - 1].prevision} |
       Rut : ${dental[dentalConsulta - 1].rut}
    <br/>`
  );


//Horas para Traumatologo solicitadas
  document.write("<h3>Horas de Traumatologia </h3>")
// Primer y última consulta de Traumatologo PACIENTE 
  document.write(
    `Nombre Primer Paciente : ${traumatologia[0].paciente} -
     Hora De Atención  : ${traumatologia[0].hora} -
     Cobertura Previsional : ${ traumatologia[0].prevision} |
     Rut : ${ traumatologia[0].rut} </br>
     
     Nombre Último Paciente : ${traumatologia[traumaConsulta - 1].paciente} -
     Hora De Atención  : ${traumatologia[traumaConsulta - 1].hora} -
     Cobertura Previsional : ${  traumatologia[traumaConsulta - 1].prevision }  |
     Rut : ${traumatologia[traumaConsulta - 1].rut}
      <br />`
  );


   
    radiologia.shift();
    radiologia.pop();

 //Pacientes Atendidos por odontólogia
    document.write( `<h3> Horas Odontológicas Solicitadas </h3>` )
    dental.forEach(function(consulta) {
      let consultaDuda = Object.values(consulta);
      document.write(`<p> ${consultaDuda.join(" - ")} </p>`);
      
    });

// Info de pacientes atendidos, incluye dato de especialista, hora y previsión/ Atencion para identificar especialidad en horas atendidas//
    document.write( `<h3> Pacientes Atendidos Las Últimas Horas </h3>` )
    let pacientes = [];
    traumatologia.forEach(consulta => {
    pacientes.push("Paciente " + consulta.paciente + " Atención Por Especialista "  + consulta.especialista + " - " + consulta.atencion, "Hora = " + consulta.hora, "Previsión = " + consulta.prevision, "<br>");
    }) ;
    radiologia.forEach(consulta => {
     pacientes.push("Paciente " + consulta.paciente + " Atención Por Especialista "  + consulta.especialista + " - " + consulta.atencion , "Hora = " + consulta.hora, "Previsión = " + consulta.prevision, "<br>");
    });
    dental.forEach(consulta =>  {
     pacientes.push("Paciente " + consulta.paciente + " Atención Por Especialista "  + consulta.especialista + " - " + consulta.atencion, "Hora = " + consulta.hora, "Previsión = " + consulta.prevision,  "<br>");
    });

    pacientes.forEach(paciente =>  {
      document.write(`<p> ${paciente}</p>`);
    });


    //Previsiones Modificadas let DENTAL / odontólogia 

    document.write( `<h3> Previsiones De Pacientes Modificadas </h3>` )
    let newDental = dental.map(consulta => {
      if (consulta.prevision === "FONASA") {
        consulta.prevision = "ISAPRE";
        return consulta;
      } else {
        consulta.prevision = "FONASA";
        return consulta;
      }
    });


    // datos finales dental / prevision / Nombre / RUT 
    console.log(newDental);
    newDental.forEach(consulta => {
      document.write(`<p> ${consulta.prevision} ; ${consulta.paciente} ; ${consulta.rut}</p>`);
    });
   