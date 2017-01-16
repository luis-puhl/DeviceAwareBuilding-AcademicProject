**Lista de produtos no mercado**

Para chegar ao modelo final do sensor de dispositivos, foram testadas algumas plataformas capazes de se comunicar com o Wifi, já que este é usado para detectar os dispositivos. A seguir, serão apresentadas cada uma dessas plataformas quanto as suas especificações técnicas e aos produtos utilizados em conjunto para que elas pudessem funcionar e serem programadas.


**ESP8266**

O ESP8266 é um SOC (*system on chip*), ou seja, é um chip com todos os circuitos eletrônicos necessários e partes para um dado sistema em único cirtuito integrado. Este chip possui:
* Wifi embutido com capacidade de 2,4 GHz (802.11 b/g/n);
* 16 GPIOs (*general-purpose input/output*) - I2U, SPI, UART, entrada ADC, saída PWM;
* arquitetura RISC de 32 bits;
* CPU que opera em  80 MHz, com possibilidade de operar em 160 MHz;
* 64 KB de ROM para *boot*;
* 64 KB de RAM para instruções;
* 96 KB de RAM para dados.
* Memória Flash SPI de 512 KB.
Diversos fabricantes utilizam este chip diferentes configurações, os chamados módulos. Estes módulos usam o ESP8266 com diferenças perceptíveis, por exemplo, quantidade de pinos (GPIOs) e tamanho. Neste trabalho, foram usados os módulos: ESP01, LoLin NodeMcu 12E, D1 mini e ESP 12.
//CONTINUAR --> falar um pouco mais das coisas que diferenciam os módulos http://esp8266.net/ -->the modules.






-pq foi escolhido
-variedade de modelos
-modelos usados
-problemas que apresentou
-variedade de modelos

-esp 01,  LoL win, D1 M1  (já tem pinos para programação)
- esp 12 (placa de circuito impresso)
 * ams 1117 --> regulador de tensão
 * adaptador serial - usb cp2102
 * adaptador serial ch340


* Raspberry Pi 3 B plus
  * mini adaptador wifi
  * fonte 5v 2A 10W
  * cartão micro sd 16gb


* Quadro Comparativo --> comparação entre os três sensores
