## Mosaico Website.
[![pipeline status](https://gitlab.com/mosaico-developers/mosaico-website/badges/master/pipeline.svg)](https://gitlab.com/mosaico-developers/mosaico-website/commits/master)
[![coverage report](https://gitlab.com/mosaico-developers/mosaico-website/badges/master/coverage.svg)](https://gitlab.com/mosaico-developers/mosaico-website/commits/master)

## Check-in Dance
Esteja atenta aos seguintes passos ao realizar o checkin do código no repositório.

1. **Execute os testes.** ```npm test```
2. Commit o código acompanhado de uma mensagem inteligível. Evitar coisas genéricas como "Making changes" ou "Refactoring". 
3. Verifique o estado do build no CI. **Nunca dê pull num build quebrado.**
4. Faça o pull do código mais recente na sua máquina local. Utilize a flag ```--rebase``` para tal. Isso vai atualizar o código local e aplicar sua mudança sobre o código atualizado. ```git pull --rebase```.
    * Caso haja conflitos, resolva-os manualmente e continue o processo de rebase até que não haja mais conflitos. ```git rebase --continue```
5. **Rode os testes novamente**
6. Verifique o CI.
7. Finalmente, ```git push -u origin master```

*Ao executar o commit, o **husky** irá rodar os testes e o linter, só permitindo o commit se ambos estiverem ok.*

## Executando aplicação
Caso a variável ```PORT``` não seja especificada, aplicação utilizará a porta **3030**.  
Execute (simultaneamente, em dois terminais):  
> $ npm run build:dev  
> $ npm run start:dev

## Google Lighthouse CLI
Para realizar a análise do Lighthouse diretamente do terminal, execute ```npm run lighthouse```.

O report abrirá automaticamente no navegador **Google Chrome**, sendo salva uma cópia na pasta ```/lighthouse```. Cada execução sobescreve a cópia presente na pasta.

**A avaliação só funciona com a [aplicação em execução](#executando-aplicação).**