
IoT é foco de empresas e entusiastas devido a seu incrível crescimento com
milhares de novos dispositivos todos os dias, tudo isso construido sobre os
baixos custos de processamento tanto em pequenos *hardwares* quanto em
grandes núvens e da capacide comunicacional que é cada vez mais exigida e
presente em coisas do dia-a-dia.


Através da exploração de plataformas emergentes (como o ESP8266 e Raspberry
Pi) e da construção de protótipos este trabalho teve como objetivo
construrir um sensor que permita que um prédio localize contextualmente (em
qual sala) qualquer dispositivo que se comunique utilizando Wi-Fi. Para
alcançar esse objetivo utilizou-se diversas ferramentas tencnologicas
incluindo Raspberry Pi 3, TShark, Node.js e MQTT.


Estas ferramentas possibilitaram testes onde confirmou-se novamente que não é
possível associar uma distância geográfica a potência de sinal recebida
(RSS) no caso de comunicações Wi-Fi porém, com o mesmo sensor é possível
associar um dispositivo ao contexto de um sensor como a sala dentro de um
prédio.