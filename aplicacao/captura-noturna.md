Para entender  o ambiente onde a aplicação foi desenvolvida e testada no âmbito 
de ruído wi-fi e pontos de referência wi-fi foi executada uma captura de teste
durante a noite quando ninguém habitava o prédio prototipo. 

Nesta captura dois sensores foram utilizados posicionados a menos de 10 centímetros 
de distância um do outro sobre uma mesa a um metro do chão a captura ocorreu de 2:50 
até aproximadamente 11:25 totalizando aproximadamente 8 horas de captura

 a captura foi executada com o comando

```
 $ tshark -I -i wlan0 -T fields -E header=y -E quote=d -e wlan.sa -e wlan.sa_resolved -e wlan.ta -e wlan.ta_resolved -e radiotap.dbm_antsignal -e wlan_mgt.ssid >> 2017-01-17--02-48--rpi-02.csv &
 ```

A análise de dados foi feita com a função *summary* da ferramenta *Ron’s editor*
e a filtragem com a função *Filter* da ferramenta *RecCsvEditor*

https://www.ronsplace.eu/Products/RonsEditor

http://recsveditor.sourceforge.net/

Para o primeiro sensor foram detidos 1 729 624 pacotes num arquivo de 155MB 
com 88 transmissores únicos dos quais se destacaram dois endereços MAC que são os 
pontos de acesso para rede wi-fi do laboratório.


