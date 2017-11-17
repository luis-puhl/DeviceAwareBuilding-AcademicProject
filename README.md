HABILITANDO UM PRÉDIO A LOCALIZAR CONTEXTUALMENTE DISPOSITIVOS UTILIZANDO REDES SEM FIO
========================================================================================

Trabalho de Conclusão do Curso de Bacharelado
em Ciência da Computação apresentado
ao Departamento de Computação da Faculdade
de Ciências da Universidade Estadual
Paulista “Júlio de Mesquita Filho” – UNESP,
Câmpus de Bauru.
Orientador: Prof. Dr. Eduardo Martins Morgado

BAURU
2017

<h1><a href="monografia-DAB.pdf">
	<img src="https://image.flaticon.com/icons/svg/179/179483.svg" height=40> Último PDF
</a></h1>

# RESUMO

IoT é o foco de empresas e entusiastas devido ao seu incrível crescimento com milhares
de novos dispositivos todos os dias. Tudo isso construído sobre os baixos custos de
processamento tanto em pequenos dispositivos quanto em grandes nuvens e da capacidade
comunicacional que é cada vez mais exigida e presente em coisas do dia-a-dia. Através da
exploração de plataformas emergentes (como o ESP8266 e o Raspberry Pi) e da construção
de protótipos, este trabalho teve como objetivo construir um sensor que permita que um
prédio localize contextualmente qualquer dispositivo que se comunique utilizando Wi-Fi. Para
alcançar esse objetivo, utilizou-se diversas ferramentas tecnológicas, incluindo Raspberry
Pi 3, TShark, Node.js e MQTT. Estas ferramentas possibilitaram testes onde confirmou-se
que não é possível associar uma distância geográfica à potência de sinal recebida (RSS)
no caso de comunicações Wi-Fi, porém, com o mesmo sensor, é possível associar um
dispositivo ao contexto de um sensor como uma sala dentro de um prédio.

**Palavras-chave:** Internet das Coisas. Raspberry Pi. Localização Contextual. MQTT. Node.js.
TShark. Wi-Fi.

# Ficha Catalográfica

```
Puhl, Luís Henrique.
Habilitando um Prédio a Localizar Contextualmente Dispositivos utilizando
Redes Sem Fio / Luís Henrique Puhl de Souza, 2017
84 p. : il.

Orientador: Prof. Dr. Eduardo Martins Morgado

Monografia (Trabalho de Conclusão de Curso) – Universidade Estadual
Paulista. Faculdade de Ciências, Bauru, 2017

1. Internet das Coisas. 2. Raspberry Pi. 3. Localização Contextual. 4.
MQTT. 5. Node.js. 6. TShark. 7. Wi-Fi. I. Universidade Estadual Paulista "Júlio
de Mesquita Filho". Faculdade de Ciências.
```

# DeviceAwareBuilding-AcademicProject

> Luís Puhl's Bachelor Thesis - A internet connected sensor network intended to
locate contextually connected devices (aka IoT and mobile) inside a building
thus making it and its managers (and anyone or anything allowed) aware of the
devices location.

[![License MIT](http://img.shields.io/badge/license-MIT-brightgreen.svg)](license.md)
[![Version](http://img.shields.io/badge/version-1.2.0-brightgreen.svg)](https://github.com/luis-puhl/DeviceAwareBuilding-AcademicProject/releases/latest)
[![DOI](https://zenodo.org/badge/56741769.svg)](https://zenodo.org/badge/latestdoi/56741769)

Documentation and papers of **Luís Puhl's Bachelor Thesis** - A internet
connected sensor network intended to locate contextually connected devices (aka
IoT and mobile) inside a building thus making it and its managers (and anyone or
anything allowed) aware of the devices location.

## Releases

Want the latest delivered version? Look no further,
[![Version](http://img.shields.io/badge/version-1.2.0-brightgreen.svg)](https://github.com/luis-puhl/DeviceAwareBuilding-AcademicProject/releases/latest)
but there is also [The last PDF build](monografia-DAB.pdf).

Further more, you can find all [delivered releases
here](https://github.com/luis-puhl/DeviceAwareBuilding-AcademicProject/tree/master/releases/)
and all [git
releases](https://github.com/luis-puhl/DeviceAwareBuilding-AcademicProject/releases)
also.

## Enviroment

 - Windows 10
 - Git
 - MikTeX for windows
 - TeXnicCenter
 - Atom (with the following packages)
	- latex
	- language-latex
	- pdf-view (PDF.js)

This file structure is a adaptation from
https://github.com/kks32/phd-thesis-template to the UNESP version of the ABNT
rules.

