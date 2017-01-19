// Modo de uso do tshark na aplicação,utilizar na construção
Neste modo de uso os resultados são direcionadas para a saída padrão 
(stdout)  do terminal e podem ser capturados por outro programa no formato
de valores separados por vírgula (csv).  os campos escolhidos para captura
são *wlan.sa*, *wlan.sa_resolved*, *wlan.ta*, *wlan.ta_resolved*, *radiotap.dbm_antsignal* e *wlan_mgt.ssid*

Teste relação de distância com smartphone como objetivo

Para verificar a capacidade do sensores de localizar contextualmente um dispositivo 
móvel, smartphone, foi utilizado. Este foi posicionado em duas salas diferentes, Em
cada uma das salas foi executada uma captura de 10 minutos. Para que houvesse tráfego
na rede o dispositivo móvel foi configurado para receber um stream de vídeo no aplicativo Netflix.

A captura foi realizada utilizando a ferramenta TShark da mesma maneira que é utilizada no
aplicativo. A descrição deste modo de operação pode ser encontrada no capítulo de construção. 

```
tshark -I -i wlan1 -T fields -E separator=, -E quote=d -e wlan.sa -e wlan.sa_resolved -e wlan.ta -e wlan.ta_resolved -e radiotap.dbm_antsignal -e wlan_mgt.ssid >> sensor-02-distance-test-01.csv
```

Para o primeiro caso o dispositivo estava na mesma sala do sensor número 2 que é a maior
sala do prédio com 12  metros de comprimento por 10 metros  De largura. neste caso foram 
capturados 157736 pacotes totalizando 9.7 megabytes pelo sensor 1 21974 pacotes totalizando 
1.9 megabytes de captura pelo sensor 2.

No segundo teste o dispositivo móvel estava posicionado no corredor fora da sala do sensor 1 
e distante do sensor 2.  neste teste o sensor 1 capturou 103555 pacotes totalizando 6.4 megabytes 
de captura e o sensor 2 capturou 22635 pacotes totalizando 2 megabytes de captura

 posteriormente os arquivos de captura foram analisados com a ferramenta *Ron’s Editor*  para que um sumário fosse construído. 
