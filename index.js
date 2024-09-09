function Reloj() {
            var hora = new Date();

             horaActual = hora.getHours().toString().padStart(2, '0') + ':'+ 
                         hora.getMinutes().toString().padStart(2, '0')+":" +
                         hora.getSeconds().toString().padStart(2, '0');
            document.getElementById('hora').textContent = horaActual;
        }

        setInterval(Reloj, 1000);
       Reloj();