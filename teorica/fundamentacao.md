
# Fundamentação teórica

> Base: Palavras chaves que descrevem o projeto, baseado em citações?

> HABILITANDO UM PRÉDIO A LOCALIZAR CONTEXTUALMENTE DISPOSITIVOS UTILIZANDO REDES SEM FIO

> Nesta seção apresentam-se conceitos, fundamentos e teorias que dão suporte
ao presente trabalho. Dentre eles, Computação em Nuvem, Balanceamento de Cargas
e Redes Neurais Artificiais.

Para conceituar, fundamentar e dar suporte teórico ao presente trabalho
apresentamos nesta seção os tópicos IoT, localização contextual de dispositivos,
e localização baseada em redes sem fio.

## Internet das coisas (*IoT*)

Uma das primeiras aplicações e definições de IoT foi feita por Kevin Ashton em
1999 para a *Procter & Gamble* (P&G) ([ASHTON, 2009]) e simultaneamente no
laboratório Auto-ID Labs no Instituto de Tecnologia de Massachusetts (MIT -
*Massachusetts Institute of Technology*) utilizando identificação por
radio-frequência (RFID - *radio-frequency identification*) ([Atzori et al,
2010]; [Mattern e Floerkemeier, 2010]) e desde então cresceu ultrapassando o
escopo da tecnologia RFID porém sempre com as premissas de "Uma infraestrutura
global para a Sociedade da Informação, habilitando serviços avançados através da
interconecção de coisas (físicas e virtuais) baseadas em tecnologias, existentes
e evolutivas, de informação e comunicação" ([ITU 2012]) ([Wortmann, 2015]).

[ASHTON, 2009]:(<http://www.rfidjournal.com/articles/view?4986> "That 'Internet of Things' Thing")
[ASHTON, 2009](<http://www.rfidjournal.com/articles/view?4986> "That 'Internet of Things' Thing")

[Atzori et al, 2010]:(<http://www.sciencedirect.com/science/article/pii/S1389128610001568> "The internet of things: a survey")
[Atzori et al, 2010](<http://www.sciencedirect.com/science/article/pii/S1389128610001568> "The internet of things: a survey")

[Mattern e Floerkemeier, 2010]:(<http://www.vs.inf.ethz.ch/publ/papers/Internet-of-things.pdf> "From the Internet of Computers to the Internet of Things")
[Mattern e Floerkemeier, 2010](<http://www.vs.inf.ethz.ch/publ/papers/Internet-of-things.pdf> "From the Internet of Computers to the Internet of Things")

[ITU 2012]:(<http://handle.itu.int/11.1002/1000/11559> "Overview of the Internet of things")
[ITU 2012](<http://handle.itu.int/11.1002/1000/11559> "Overview of the Internet of things")

[Wortmann, 2015]:(<http://link.springer.com/article/10.1007%2Fs12599-015-0383-3> "Internet of Things: Technology and Value Added")
[Wortmann, 2015](<http://link.springer.com/article/10.1007%2Fs12599-015-0383-3> "Internet of Things: Technology and Value Added")

Hoje em dia quase qualquer tecnologia de comunicação acessível a computadores
pode ser utilizada como meio de comunicação entre nós da IoT tornado RFID mais
uma, porém de grande importância, tecnologia info-comunicacional a disposição
das coias para sua conexão. Esta gama de tecnologias possibilita uma gama
equivalente de coias conectadas, se a coisa pode usar de uma tecnologia de
conexão, considerando suas restrições de volume, custo e utilidade, muito
provavelmente vai faze-lo gerando ao menos uma identidade virtual representando
seu objeto físico e seus atributos. Esta identidade virtual e atributos virtuais
serão expostos para todos individuos, humanos ou coisas, que lhe forem
convenientes de qualquer lugar do universo virtual fazendo efetivamente parte da
internet.

## Localização contextual de dispositivos

O terno *"Contexto"* e *"Consciência de Contexto"* em ciência da computação
expressa uma ideia recente estudada nos campos de inteligência artifical e
ciência cognitiva desde 1991 e ainda é considerado um tema atual e promissor a
ponto de mudar o cenário de negócios nos próximos 10 anos porém sem definição
simples. Tamanha é a falta de uma definição geral que realmente funcione para
casos reais que existe uma proposta de definir o termo utlizando uma nova
metodologia de pesquisa holística através de mineração e agrupamento de texto
advindo de publicações ciêntificas ([Pascalau, Nalepa, Kluza 2013]).

[Pascalau, Nalepa, Kluza 2013]:(<http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.672.5972> "Towards a Better Understanding of Context-Aware Applications")

[Pascalau, Nalepa, Kluza 2013](<http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.672.5972> "Towards a Better Understanding of Context-Aware Applications")

Mesmo sem uma definição permanente em vista, utilizaremos o que é considerado
estado da arte para o termo *"Contexto"* que foi introduzido por Dey e Abowd em
1999 ([Dey e Abowd, 1999]) e reforçado por Dey em 2000 ([Dey, 2000]):

[Dey, 2000]:(<http://www.cc.gatech.edu/fce/ctk/pubs/dey-thesis.pdf> "Providing architectural support for building context-aware applications")

[Dey, 2000](<http://www.cc.gatech.edu/fce/ctk/pubs/dey-thesis.pdf> "Providing architectural support for building context-aware applications")

> *"Contexto é qualquer informação que pode ser utilizada para caracterizar a
situação de uma entidade. Uma entidade é uma pessoa, lugar ou objeto que é
considerado relevante para a interação entre um usuário e uma aplicação,
incluindo o próprio usuário e a aplicação."*  
[Dey e Abowd, 1999] p. 3. Tradução Nossa.

[Dey e Abowd, 1999]:(<http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.150.4833> "Towards a Better Understanding of Context and Context-Awareness")
[Dey e Abowd, 1999](<http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.150.4833> "Towards a Better Understanding of Context and Context-Awareness")

### - Localização contextual

Das informações contextuais que uma aplicação de cliente móvel pode obter, a
localização é uma das mais importantes. Ajudar pessoas a navegar por mapas,
encontrar objetos e pessoas com os quais tem interesse de interagir é sem dúvida
uma boa meta a ser alcançada com a coleta da localização do cliente ([Bellavista
et al, 2008]). Porém, ao contrário das técnicas atuais de localização que
consideram a propriedade desta informação com sendo do cliente móvel por maior
confiança por parte dos usuários humanos finais detentores dos clientes
localizados nesses sistemas decidindo confortavelmente em compartilhar ou não
esta informação com quem a solicitar, neste trabalho os humanos ou tomadores de
decisão não estarão em posse do cliente móvel e sim em posse do prédio, portanto
a mesma informação, sem degradação em sua importância, passará a ser coletada e
armazenada pelo provedor da rede como nos Serviços Baseados em Localização (LBS -
*Location-Based Services*) de primeira geração porém mantendo o foco no usuário
uma vez que este mudou da detenção de um móvel para múltiplos tornado a detenção
do todo (coisas dentro do prédio) mais precioso do que o das partes.

[Bellavista et al, 2008]:(<http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=4487093> "Location-Based Services: Back to the Future")
[Bellavista et al, 2008](<http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=4487093> "Location-Based Services: Back to the Future")

Uma vez encontrada a localização de um dispositivo, metadados sobre o prédio são
mesclados formando um conjunto rico contextualmente do ponto de vista do prédio
como fornecedor principal dos dados para a internet e portanto seus usuários.
Essa riqueza é garantida com metadados sobre o dispositivo (identificação, nome,
histórico, carecteristicas) e sobre o prédio (mapa, estrutura de salas, horario
de funcionamento, consumo energético, humanos responsáveis e lista de
equipamentos) que trazem possibilidades de extração de informação sem igual para
os detentores deste prédio e seu conteúdo. Esta capacidade do prédio deve-se
pelo papel de coordenador de informações e controlador de meta-informações
semelhante ao Coordenador em uma aplicação na arquitetura
Modelo-Apresentação-Adaptador-Controlador-Coordenador (MPACC -
*Model-PresentationAdapter-Controller-Coordinator*) proposto por Román e
Campbell ([Román e Campbell 2001]).

[Román e Campbell 2001]:(<http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.408.8058> "A Model for Ubiquitous Applications")
[Román e Campbell 2001](<http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.408.8058> "A Model for Ubiquitous Applications")

### - Contexto de um dispositivo em um prédio

divisões lógicas dentro de um predio

estrutura de URI para o prédio

## Localização baseada em redes sem fio

Como

sensores(WiFi, BLE)

Rpi como sensor
