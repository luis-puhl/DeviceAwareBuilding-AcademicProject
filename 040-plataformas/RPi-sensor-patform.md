

Para a localização com os residuos de comunicação *WiFi* são necessários
sensores que possam capturar estes residuos e processar qualquer informação
capturada por esse sensor. Esta plataforma de sensor pode ser construida com
qualquer plataforma computacional capaz de ser programada com comunicação *WiFi*
porém o *hardware* de *WiFi* e seu *software* controlador deve permitir o Modo
Promíscuo.

Este Modo Promíscuo (*promiscuous mode*) é definindo pela capacidade de uma
Placa Adaptadora de Rede *WiFi* (*Network Interface Card* - *NIC*) receber e
interpretar todos os pacotes que trafegam em uma rede ou em todas as redes que
estão em seu alcance, independentemente do destinatário do pacote. Em seu
fucionamento normal uma *NIC* descarta todos os pacotes que não são destinados
para ela o mais cedo possível evitando reprocessamento de dados indesejáveis,
por este motivo não são todas as *NICs* que permitem o Modo Promíscuo Essa
funcionalidade elimina a necessidade de *hardware* ou *software* em cada um dos
dispositivos rasterados.

Neste sentido elegeram duas plataformas de notável importância no mercado atual
e notável facilidade de acesso para qualquer interessado na área. As plataformas
testadas são o microcomputador *Raspberry Pi* e o microcontrolador *ESP8266*.
Ambos  foram escolhidos pelo domínio do segmento de Prototipação e Faça Você
Mesmo  (*Do It Yourself* - *DYI*) dentro do campo de IoT. Outro líder de
segmento, o *Arduino*  foi prontamente descartado por não conter nativamente a
habilidade de conectar-se à *internet* sendo constantemte combinado com um dos
escolhidos para ganhar esta habilidade  demonstrando claramente menor afinidade
a este projeto em comparação aos seus igualmente famosos concorrentes.
