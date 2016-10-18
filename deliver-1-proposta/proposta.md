DeviceAwareBuilding-AcademicProject
====================================

# 1 - Introdução

Recentemente, Internet das Coisas (IoT - Internet of Things) vem tomando o foco
das atenções de empresas e entusiastas de Tecnologia da Informação ([DZONE,
2015])  a tal ponto que as empresas líderes do segmento já incluem IoT como uma
de suas áreas de atuação ([IBM, 2016]) ([ARM, 2016]) ([MICROSOFT, 2016])
([INTEL, 2016]) ([ORACLE, 2016]) ([GOOGLE, 2016]) ([AMAZON, 2016a]).

[DZONE, 2015]:(<https://dzone.com/guides/internet-of-things-1> "DZONE. THE DZONE GUIDE TO THE INTERNET OF THINGS")

[IBM, 2016]:(<http://www.ibm.com/internet-of-things> "IBM. IBM IoT.")

[ARM, 2016]:(<https://www.mbed.com/en/> "ARM. Welcome to mbed")

[MICROSOFT, 2016]:(<https://dev.windows.com/en-US/iot> "MICROSOFT. The Internet of Your Things")

[INTEL, 2016]:(<https://software.intel.com/en-us/articles/a-fast-flexible-and-scalable-path-to-commercial-iot-solutions> "INTEL. IoT Solutions | IntelDeveloper Zone")

[ORACLE, 2016]:<https://www.oracle.com/solutions/internet-of-things/index.html> "ORACLE. Oracle IoT"

[GOOGLE, 2016]:(<https://cloud.google.com/solutions/iot/> "GOOGLE. Google for Internet of Things")

[AMAZON, 2016a]:(<https://aws.amazon.com/pt/iot/> "AMAZON. AWS IoT")

Todo este movimento no mercado é justificado pelo baixo custo dos pequenos
dispositivos computacionais ([FUNDATION, 2015]) ([ESP8266.NET, 2016]) e grandes
serviços na nuvem ([KAUFMANN; DOLAN, 2015]) ([AMAZON, 2016b]). Este baixo custo
possibilita a computação ubíqua descrita por Weiser em 1991 e 1992 ([WEISER,
1999]) que é entendida pelos autores como “computação virtualmente onipresente”.
Também para os autores, esta virtual onipresença é base e consequência para a
IoT, sendo esta a realizadora da computação ubíqua.

[FUNDATION, 2015]:(<https://www.raspberrypi.org/blog/raspberry-pi-zero/> "RASPBERRY PI FOUNDATION. Raspberry Pi Zero: the $5 computer")

[ESP8266.NET, 2016]:(<http://esp8266.net/}> "ESP8266.net home")

[KAUFMANN; DOLAN, 2015]:(<https://cloud.google.com/files/esg-whitepaper.pdf> "Price Comparison: Google Cloud vs AWS")

[AMAZON, 2016b]:(<https://aws.amazon.com/pt/iot/pricing/> "AMAZON. Deﬁnição de preço do AWS IoT ? Amazon Web Services")

[WEISER, 1999]:(<http://dl.acm.org/citation.cfm?doid=329124.329126> "WEISER, M. The computer for the 21st century")

Uma vez contextualizado o mercado e a oportunidade de implementação da
computação ubíqua, percebemos a necessidade de dar aos elementos cotidianos
(coisas) a capacidade info-computacional, tornando-os sensores e atuadores
conectados, unicamente identificáveis e acessíveis através da rede mundial de
computadores ([LEMOS, 2013]) ([KRANENBURG, 2012]).

[LEMOS, 2013]:(<http://www.seminariosmv.org.br/textos/Andre%20Lemos.pdf> "LEMOS, A. A Comunicação das Coisas: Internet das Coisas e Teoria Ator-Rede")

[KRANENBURG, 2012]:(<http://www.fastcocreate.com/1681563/the-sensing-planet-why-the-internet-of-things-is-the-biggest-next-big-thing> "KRANENBURG, R. van. The Sensing Planet: Why The Internet Of Things Is The Biggest Next Big Thing")

É esperado que uma quantia total de 6,4 bilhões de dispositivos conectados
exista até o final de 2016 ([GARTNER, 2015]) e entre 26 bilhões ([GARTNER,
2014]) e 50 bilhões até 2020 com até 250 novas coisas conectando-se por segundo
([CISCO, 2013]).

[GARTNER, 2015]:(<http://www.gartner.com/newsroom/id/3165317> "GARTNER. Gartner Says 6.4 Billion Connected "Things"Will Be in Use in 2016, Up 30 Percent From 2015")

[GARTNER, 2014]:(<http://www.gartner.com/newsroom/id/2684616> "GARTNER. Gartner Says the Internet of Things Will Transform the Data Center")

[CISCO, 2013]:(<http://blogs.cisco.com/news/cisco-connections-counter> "CISCO. How Many Internet Connections are in the World? Right. Now")

# 2 - Problema

> **Problema**  
*Grande quantidade de dispositivos*

Tamanha quantidade de dispositivos conectados pouco acrescenta na vida diária se
humanos ou coisas não puderem simplesmente se encontrar, tanto em ambiente real
quanto virtual é necessário o contato entre as partes para a existência de uma
interação.

> *Introduza o problema de localizar e contextualizar cada dispositivo.*

Mais ainda, para melhor funcionamento de aplicações como o uso de conteúdo
específico para cada usuário e situação é necessário coletar informações
contextuais. Para a maioria das aplicações a informação contextual de maior
relevancia é a localização física.

Destacamos a necessidade da criação desta informação através de sensores ativos
sempre que necessário para que o dispositivo tenha ciência deste contexto em
suas tomadas de decisão e para que outros (sistemas, pessoas e coisas) saibam a
localização de qualquer dispositivo ao qual têm interesse de interagir.

> *Exemplo da perda de aparelhos no predio (zebra) (ou outro exemplo)*

Um exemplo da necessidade de localização de dispositivos dentro de um prédio
seria um profissional saber onde está o dispositivo em seu local de trabalho,
seja ele um vendedor e seu tablet para demostrar um produto fora de estoque em
uma loja ou um médico e um desfibrilador.


> *Soluções corelatas*  
*Nota do autor: Introduza os meios existentes de localização (marcelo).*

## 2.1 - Sobre Sistemas de Posicionamento

Sistemas de posicionamento (PS - *Positioning System*) são geralmente
constituidos de um Ponto Origem Global escolhido (*O*) e um conjuto não vazio de
Pontos de Referência (RP - *Reference Point*) cuja localização global em relação
ao *O* é conhecida com precisão maior ou igual a oferecida pelo sistema.

Também faz parte do sistema o ponto móvel (MU - *Mobile User*) sobre o qual
temos interesse em determinar a posição que é feita pelo PS encontrando uma
distância (com dimensão variável de acordo com o método utilizado para
adiquiri-la) relativa a um sub-conjunto de RPs. Feito isso é possível utlizar
modelos matemáticos para a partir das distâncias encontrar uma posição do MU em
relação aos RPs e uma nova transformação é aplicada para encontrar a posição
relativa ao *O*.

Uma das maneiras de classificar PSs é entre os de Auto Posicionamento e
Posicionamento Remoto. Os de Auto Posicionamento contém no MU todo aparato
necessário para medir a distância dos RPs e calcular a posição em relação a *O*.
Já os de Posicionamento Remoto tem o mínimo necessário na MU e todo o trabalho
de cálculo de distância e posição global é feito nos RPs ou em uma unidade
coordenadora destes.

Para PSs eletônicos baseados em radio-frequência (RF - *Radio Frequency*)
geralmente utilizam-se dois componetes básicos, Transmissores e Receptores, os
quais assume-se que ao menos um destes está no RP e ao menos um outro no MU.
Para calcular a distância entre MU e RP utiliza-se as propriedades da
comunicação por RF como tempo de chegada (TOA - *Time Of Arrival*), diferenial
de tempo de chegada (TDOA - *Time Difference Of Arrival*) e ângulo de chegada de
sinal (AOA - *Angle Of Arrival*).

Para maior precisão, é comum a utilização de múltiplas RPs geralmente com o
número mínimo igual ao número de dimenções espaciais que deseja-se calcular.
Notamos que para sistemas distribuídos a sincronização de relógios é um
problema clássico então o tempo conta como dimensão.

Os sistemas classificados como "Sistema de Navegação Global por Satélite" (GNSS -
*Global Navigation Satellite System*), como o tradicional Estadunidense Sistema
de Posicionamento Global (GPS - *Global Positioning System*), utilizam a técnica
em que o dispositivo móvel contém o receptor e os transmissores são fixos em
satélites na órbita terrestre [Djuknic2001]. Devido a posição e número de
satélites, o GPS e seus correlatos estão sempre presentes do ponto de vista de
um observador da superfície terrestre, sendo para este tipo de usuário um
sistema ubíquo.

Entretanto a força do sinal GNSS não é suficiente para penetrar a maioria dos
prédios, uma vez que estes dependem de visão direta (LOS - *Line-Of-Sight*)
entre os satélites e o receptor. A reflexão do sinal muitas vezes permite a
leitura em ambientes fechados, porém o cálculo da posição não será confiável
[Dartmouth2000].Portanto, apesar da ubiquidade dos GNSSs em ambientes abertos,
são necessárias soluções diferentes para obter um Sistema de Posicionamento para
Ambientes Fechados (IPS - *Indoor Positioning System*) sendo a ubiquidade deste
essencial para conquistar o mesmo nível de confiança trazido pelos GNSSs.

Para implementar este IPS, propomos o uso de tecnologias já implantadas em
dispositivos móveis e essenciais para o funcionamento dos memos, especialmente
as de camadas de comunicação, que são ubíquoas no ambiente dos dispositivos
móveis, como Wi-Fi (padrão *IEEE 802.11*) e Bluetooth (padrão *Bluetooth SIG*),
para que os objetos conectados em que temos interesse de encontrar o contexto
locativo não necessitem de modificações.

# 3 - Justificativa

> Como a manipulação de RF é geralmente mais complicada em sistemas com
*hardwares* heterogênios

Sobre o contexto encontrado, propomos um ambiente consciente onde o contexto
locativo oriundo do posicionamento remoto de cada dispositivo móvel é
administrado e divulgado pelo prédio conectado ao invés da auto localização do
aparelho, pois:

- Uma vez encontrada a localização, é mais fácil propagar esta informação do
ambiente para o aparelho em comparação ao auto posicionamento, pois a negociação
entre o ambiente e o aparelho é nula quando o primeiro contém a informação- o
ambiente sempre disponibilizará uma informação coletada para o gerador desta
informação;
- Pode-se lidar com grande heterogeniedade de dispositivos, uma vez
que cada um deles não precisa se adaptar para cada mudança de ambiente;
- Este tipo de informação já é contida nos históricos de cada Ponto de Acesso
 Wi-Fi (AP - *Access Point*), porém:
	- Geralmente sem uso - poucas são as aplicações que usam a localização
	obtida pelo AP;
	- com granularidade insuficiente para uso em aplicações contextualizadas;
	- geralmente não disponibilizada pelos APs.
- Uma vez instalado um PS deste gênero, a quatia de dispositivos que ele pode
localizar fica limitada apenas pela rede física;
- Economia de hardware quando menos é exigido de cada dispositivo;

Levamos em conta também a quantidade prevista de em média 5 dispositivos IoT
por pessoa que seriam beneficiados sempre que utilizados no ambiente conectado.

![Modelo das camadas][projeto]  
Fonte: Marcelo Augusto Cordeiro

[projeto]: latex/img/projeto.JPG

A Figura \ref{fig:projeto} apresenta a arquitetura simplificada de uma aplicação
IoT.

Para possibilitar testes em um ambiente real, o projeto aqui proposto será
instalado dentro do prédio do Laboratório de Tecnologia da Informação Aplicada
(LTIA) da Faculdade de Ciências da Unesp de Bauru.

>(Colocar itens abaixo pedidos pelo parecerista ex: beneficios ao gerenciador do predio)

> *Nota do parecerista: Reescrever*
Na visão dos autores, promover o desenvolvimento local através de trabalhos
exemplo, treinamentos ou manuais é fundamental para a equiparação dos
desenvolvedores locais com as tecnologias e tendencias de mercado então
justificamos sua execução para que outras organizações possam encontrar novos
caminhos.

> *Funcionamento por prédio*  
 -> *uma vez instalado qualquer quantidade de
devices é recebida, facil gerencia dentro do predio*  
 -> *beneficios para o admin do predio*  


# 4 - Objetivos

## 4.1 - Objetivos Gerais

Considerando características locais, propõem-se a construção de uma aplicação
para localizar contextualmente dispositivos dentro de um prédio piloto e avaliar
sua precisão.

Além desta aplicação, é objetivo definir o custo do projeto piloto, incluindo
esforço de pesquisa assim como definir um custo para replicação deste
localizador contextual em outros prédios.

## 4.2 Objetivos Específicos

-  Estabelecer o estado da arte sobre a desenvolvimento de aplicações IoT;
-  Identificar desafios locais para o desenvolvimento;
-  Identificar provedores de serviços, dispositivos e ferramentas para o
desenvolvimento;
- Construção de sensores de identificação e localização (distância) de
 dispositivos cuja comunicação seja baseada em Bluetooth e Wi-Fi;
- Posicionamento destes sensores;
- Construção de um dispositivo agregador de informações dos sensores
 (*gateway*) e sua interface web (Web REST API - *Representational
State Transfer Application Programming Interface*);
-  Estimar o custo total do projeto piloto incluindo esforço de pesquisa;
-  Estimar o custo de replicação da aplicação em outros prédios.

# 5 - Método de Pesquisa

> *Ambiente conciente*  

Abordagens para medir distâncias através de redes sem fio Wi-Fi
([bahillo2009ieee]) e Bluetooth já existem e, propor novas maneiras não é o foco
deste trabalho. Utilizando essas técnicas, propomos estabelecer uma rede de nós
sensores colaborativos fixos no ambiente onde deseja-se obter a localização dos
dispositivos. As informações de distância serão compartilhadas entre os nós para
maior precisão da informação.

> Esta rede estará conectada a internet e proverá o serviço de localização

Para a implementação pretende-se utilizar os softwares de maior destaque
recentemente nos ramos de comunicação de baixa energia (*MQTT*), serviços *Web*
para armazenamento (*MongoDB*) e publicação (*NodeJS*), além de softwares para
medição da distância sem interferir na comuncação (*Sniffing*) e das plataformas
de hardware disponíveis e recomendadas para IoT com capacidade Wi-Fi e Bluetooth
(*Raspberry Pi 3*).

Mesmo com a grande quantidade de dispositivos já conectados são poucos os
documentos descrevendo boas práticas para concepção, construção e manutenção de
aplicações IoT, especialmente sobre os cuidados tomados quanto a segurança e
análise de custos para a implementação e manutenção.

Além disso, a falta de referências neste sentido é agravada quando considera-se
a implementação no interior do estado de São Paulo. Nesta região, poucas são as
organizações atualizadas neste tema, levando a uma falta enorme de conteúdo
escrito na linguagem local além de serviços e produtos disponíveis para
construção de uma plataforma completa e competitiva nesta região.

Devido a falta de conteúdo e instrução, utilizaremos prototipagem ágil para este
projeto, uma vez que esta metodologia de desenvolvimento é recomendada para
projetos cujas especificações e definições não são claras, demandando muitas
modificações das mesmas durante a execução do mesmo. Esse método entra em
contraste com metodologias clássicas, como a cascata que apesar de previsíveis,
não reagem bem a ambientes de extrema incerteza.

Mais especificamente utilizaremos uma variante da metodologia *Scrum*
[James2016] que será adaptada para o projeto. Nela, serão executadas iterações
de uma semana em que a cada iteração, uma nova versão melhorada do produto
completo (hardware, software, documentação e resultados) será entregue.

Dentro de cada iteração, as camadas da aplicação IoT serão escolhidas,
implementadas, justificadas e avaliadas, sendo todo processo documentado. Como
resultado de cada uma delas, será gerado um relatório das mudanças a partir da
iteração anterior.

>O que é cumprir parcialmente no paragrafo abaixo?

Com mais detalhes, cada iteração cumprirá uma parte de cada objetivo no trabalho
completo levando o projeto integralmente para um estágio de completude maior a
cada iteração. Serão foco de cada iteração os objetivos abaixo, gerando um
relatório utilizado para tomar e justificar decisões durante a execução do
projeto bem como servir de posterior documentação. Os objetivos de cada iteração
são:

- Escolha de provedores de serviços, dispositivos e ferramentas para o
desenvolvimento;
- Construção, avaliação, teste e manutenção dos sensores;
- Construção de um dispositivo agregador e sua API;
- Estimativa do custo total do projeto piloto;
- Estimativa do custo de replicação;
- Identificação dos desafios para o desenvolvimento.

Desta forma, esperamos garantir a liberdade necessária para o projeto ser
executado com sucesso, mesmo no ambiente de incerteza no qual o mercado local de
IoT encontra-se, cumprindo as premissas de de funcionamento, mantebilidade e
segurança que são grande importância para os interessados na área.

# 5 - Cronograma

Devido a natureza ágil e iterativa da metodologia, o cronograma será dividido em
apenas três partes: Levantamento Bibliográfico Inicial, Desenvolvimento
Iterativo (Escolha de provedores e fornecedores; Construção, avaliação, teste e
manutenção dos sensores e agregadores; Estimativas de custos totais e de
replicação e Documentação de desenvolvimento) e Revisão Final. Estas partes
serão distribuídas conforme a Tabela 1.

Tabela 1 – Cronograma de Atividades Propostas

| Atividade															 	| 	Fev	 | 	Mar	 | 	Abr	 | 	Mai	 | 	Jun	 | 	Jul	 | 	Ago	 | 	Set	 | 	Out  |
| --------------------------------------------------------------------- |:------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Levantamento Bibliográfico Inicial									| 	X	 | 	X	 | 	 	 | 	 	 | 	 	 | 	 	 | 	 	 | 	 	 | 	     |
| Escolha de provedores e fornecedores									| 	 	 | 	X	 | 	X	 | 	X	 | 	X	 | 	X	 | 		 | 		 | 	     |
| Construção, avaliação, teste e manutenção dos sensores e agregadoes	| 	 	 | 		 | 	X	 | 	X	 | 	X	 | 	X	 | 	X	 | 		 | 	     |
| Estimativas de custos totais e de replicação							| 	 	 | 		 | 		 | 		 | 	X	 | 	X	 | 	X	 | 	X	 | 	     |
| Documentação de desenvolvimento										| 	 	 | 		 | 	X	 | 	X	 | 	X	 | 	X	 | 	X	 | 	X	 | 	     |
| Revisão Final															| 	 	 | 	 	 | 	 	 | 	 	 | 	 	 | 	 	 | 	x 	 | 	X	 | 	X    |
Fonte: Produzido pelo autor

---
EOF
---

> **Nossa solução**  


> Por exemplo, utilizando uma série de sensores Wi-Fi posicionados em pontos fixos
dentro de um prédio, com a triangulação do sinal é possível calcular a posição
de dispositivos conectados à rede Wi-Fi [SubPos].


[SubPos]:http://subpos.org/
[bahillo2009ieee]:http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=5073583

> *Marcelo*: Para oferecer uma posição confiável, é necessário que estes sensores
coletem e transmitam a força do sinal Wi-Fi em cada dispositivo com uma alta
frequência.




Utilizando como exemplo o prédio do Laboratório de Tecnologia da Informação
Aplicada (LTIA) da Faculdade de Ciências da Unesp de Bauru, em um dia comum, é
observado uma média de 30 dispositivos conectados à rede Wi-Fi.

Considerando um sensor que a cada 30 segundos colete 1 kB de dados de cada
dispositivo, por mês, seriam coletados mais de 2 GB de dados. Portanto, para
garantir um sistema escalável, é necessário a utilização de técnicas de Big Data
para armazenar e manipular esses dados. O melhor modo de se definir Big Data
ainda é discutido por pesquisadores, mas uma definição simples é a de que “se é
necessário se preocupar com o tamanho dos dados, então é Big Data.” (ESPOSITO,
2015, tradução nossa)



> % Entendemos que devido a natureza física e info-computacional das coisas
>  conectadas tanto sua localização e identificação na rede de comunicação
>  (endereço lógico, de internet, IPv6 ou URI) quanto sua localização e
>  identificação física (posicionamento global e relativo, identidade física) são
>  de igual importância.

> % Porém para os autores apenas a localização lógica foi bem resolvida, documentada
>  e padronizada pela ciência da computação pois sistemas de localização físicos,
>  apesar de existirem e funcionarem perfeitamente no dia-a-dia especialmente em
>  ambientes abertos, não são tão onipresentes quanto os lógicos nem trazem
>  contextualização de maneira tão simples.

>% Para exemplificar esta visão dos autores faremos uma comparação entre uma
>  localização no formato oferecido por um sistema de posicionamento global (GPS)
>  como o trio Latitude, Longitude e elevação com um endereço lógico na internet, o
>  endereço IPv6. Nesta camada é possível comparar o nível de abrangência dos dois
>  protocolos da mesma maneira que comparamos números.

> % Porém as similaridades tornam-se estreitas no próximo nível de abstração
>  considerando para endereço lógico uma URI (*Uniform Resource Identifier*)
>  com um DNS (*Domain Name System*) propriamente aplicado quando comparamos
>  a um endereço físico contendo País, Região, Cidade, Bairro, Rua, Número de rua,
>  número de repartição (apartamento, casa), identificação do cômodo (unitário,
>  atômico nesta especificação) e finalmente uma posição relativa dentro deste
>  cômodo cuja complexidade não diminui mesmo quando levamos em conta técnicas de
>  endereçamento como ZIP e CEP.

> % Para diminuição desta complexidade podemos abordar o problema fora da teoria de
>  informação com um ponto de vista geométrico utilizando uma posição GPS comum até
>  a fase de repartição (até onde GPS via satélite é eficiente) e dentro da
>  repartição (fora de alcance dos satélites) utilizar uma nova coordenada de
>  Direção e Distância a partir de um ponto fixo único desta repartição.
