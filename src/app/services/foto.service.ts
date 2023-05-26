import { Foto } from './../models/Foto.interface';
import { Injectable } from '@angular/core';

import { Camera, CameraResultType, Photo, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FotoService {


  //Cria a lista de fotos que vao estar armazenadas no dispositivo
fotos: Foto[] = []

  //pasta onde vai salvar as fotos: Criar a variavel que armazena o local fisico (pasta) de armazenamento das fotos

private FOTO_ARMAZENAMENTO: string = 'fotos';

  constructor() { }

  //Função para tirar / buscar novas Fotos

  async tirarFoto(){

    //chama a funçao de camera e armazena o arquivo na constante

    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,      //Dados Baseados em arquivos | oferece melhor desempenho
      source: CameraSource.Camera,          //Tira automaticamente uma nova foto com a camera
      quality: 100                          //Qualidade da imagem tirada, vai de 0 a 100
    });
  }
}
