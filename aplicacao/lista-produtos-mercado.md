
**Lista de produtos no mercado** //produtos como o seu

**Pré-construção**
Para chegar ao modelo final do sensor de dispositivos, foram testadas algumas plataformas capazes de se comunicar com o Wifi, já que este é usado para detectar os dispositivos. A seguir, serão apresentadas cada uma dessas plataformas quanto as suas especificações técnicas e aos produtos utilizados em conjunto para que elas pudessem funcionar e serem programadas.


**ESP8266**
**Especificações Técnicas**
O ESP8266 é um SOC (*system on chip*), ou seja, é um chip com todos os circuitos eletrônicos necessários e partes para um dado sistema em único cirtuito integrado.

Este chip possui:
* Wifi embutido com capacidade de 2,4 GHz (802.11 b/g/n);
* 16 GPIOs (*general-purpose input/output*) - I2U, SPI, UART, entrada ADC, saída PWM;
* arquitetura RISC de 32 bits;
* CPU que opera em  80 MHz, com possibilidade de operar em 160 MHz;
* 64 KB de ROM para *boot*;
* 64 KB de RAM para instruções;
* 96 KB de RAM para dados.
* Memória Flash SPI de 512 KB.
* Núcleo baseado no IP Diamand Standard LX3 da Tensilica.

**Módulos**
Diversos fabricantes utilizam este chip com diferentes configurações, os chamados módulos. Estes módulos usam o ESP8266 com diferenças perceptíveis, por exemplo, quantidade de pinos (GPIOs), tamanho e alguns podem até operar de modo *standalone*. Neste trabalho, foram usados os módulos: ESP01, LoLin NodeMcu 12E, D1 mini e ESP 12.

Figura X - Módulos ESP
![](modulos-esp.jpg)
Fonte: Elaborada pelo autor

**Primeira tentativa**
A escolha do ESP8266 como primeira tentativa está relacionada com o fato de ser um módulo Wifi de baixo cussto, de tamanho reduzido e grande comunidade *open source*. No exterior, ele pode ser encontrado por $ 6,95 (Sparkfun), e no Brasil, em média, por R$ 15,00 (Mercado Livre).  Devido ao seu tamanho, ele é de fácil integração com demais dispositivos, bastando o uso de uma comunicação serial. Já sobre a comunidade, há inúmeros projetos DIY (em inglês *do it yourself*, em português "faça você mesmo") que ensinam a como construir e manipular projetos que envolvem o módulo. Além disso, há empresas como a Espressif que disponibiliza no GitHub projetos com documentação e código aberto.
O acesso ao módulo

**Programação do módulo**
**Comandos AT**
A programação foi feita de primeiro modo através de um *firmware* genérico chamado AT. Este é um conjunto de instruções enviados via serial para o módulo ESP que permite configurá-lo. Entretanto, os comandos AT não funcionaram, pois eles não conseguiram atingir o modo promíscuo
A programação dos módulos escolhidos foi feita através de *toolchains* (conjunto de ferramentas para desenvolvimento de software) da empresa Espressif e de um usuário do Github, muito utilizado para projetos de ESPs, Paulo Sokolovsky (*pfalcon*). Ambas as *toolchains* são SDKs de código aberto.
Os *scripts* foram feitos na linguagem C, compilados nessas SDKs e transferidos para os módulos através de barramento serial.

**Não adoção do chip**
Apesar de todos as vantagens citadas no parágrafo anterior, o ESP8266 não foi adotado como sensor final, pois não conseguiu-se colocá-lo no modo promíscuo (item X.X). C



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
