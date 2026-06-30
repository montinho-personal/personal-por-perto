import type { Cidade } from '../../lib/types';

export const cidade: Cidade = {
  slug: 'santana-ap',
  nome: 'Santana',
  uf: 'AP',
  estado: 'Amapá',
  estadoSlug: 'amapa',
  regiao: 'Norte',
  gentilico: 'santanense',
  tipo: 'cidade',

  populacao: 107618,
  populacaoAno: 2022,
  idhm: 0.69,
  idhmClasse: 'médio',
  altitudeM: 12,

  resumoEconomico:
    'Segunda maior cidade do Amapá e conurbada com a capital Macapá, Santana fica à margem esquerda do Rio Amazonas e é conhecida como a cidade-porto do estado. A economia gira em torno do Porto de Santana — principal porto exportador do Amapá, voltado a minério e madeira — da administração pública, do comércio e dos serviços, com a Área de Livre Comércio (Zona Franca Verde) reforçando a atividade logística e industrial.',

  mercado:
    'O mercado fitness é típico de cidade média do Norte, com academias de bairro, estúdios e oferta crescente de personal trainer, beneficiado pela proximidade com a estrutura de Macapá. A orla do Rio Amazonas concentra a procura por treino ao ar livre.',

  bairrosNobres: ['Central', 'Nova Brasília', 'Vila Amazonas', 'Provedor'],
  bairrosPopulares: ['Fonte Nova', 'Fé em Deus', 'Novo Horizonte', 'Vila Daniel'],

  parques: [
    {
      nome: 'Orla de Santana (Rio Amazonas)',
      descricao:
        'Calçadão às margens do Rio Amazonas, ponto de encontro para caminhada, corrida e bike, com vista para o rio e para o movimento portuário.',
    },
    {
      nome: 'Área portuária e Avenida Santana',
      descricao:
        'Eixo de circulação largo e plano usado para deslocamento ativo e treinos leves de caminhada e corrida no entorno do porto.',
    },
    {
      nome: 'Praças e academias ao ar livre dos bairros',
      descricao:
        'Praças com aparelhos de academia ao ar livre espalhadas pelos bairros, alternativa pública para treino funcional e de força.',
    },
  ],
  ciclovias:
    'O calçadão da orla do Rio Amazonas é o principal espaço usado para ciclismo e caminhada; a extensão consolidada de malha cicloviária da cidade ainda não consta em fonte oficial.',

  clima:
    'O clima é equatorial, quente e úmido o ano todo, com estação chuvosa e estação menos chuvosa bem marcadas, amenizado pelas brisas do Rio Amazonas.',
  climaTreino:
    'A umidade alta pede treino ao ar livre nas primeiras horas da manhã ou no fim da tarde, com hidratação reforçada — a brisa do rio ajuda no conforto na orla.',

  mobilidade:
    'Santana é praticamente conurbada com Macapá, ligada pela BR-156 e pela Rodovia Duca Serra, com fluxo intenso de ônibus e carros entre as duas cidades. A cidade é cortada pela ferrovia ligada ao porto e tem no Porto de Santana e na via fluvial do Rio Amazonas eixos logísticos estratégicos. O aeroporto de referência é o de Macapá.',

  corridas: [
    {
      nome: 'Corridas de rua na orla',
      descricao:
        'Provas de rua realizadas no calçadão do Rio Amazonas, com percursos planos à beira do rio, integradas ao calendário esportivo da Região Metropolitana de Macapá.',
    },
    {
      nome: 'Calendário esportivo metropolitano',
      descricao:
        'Eventos de corrida compartilhados com Macapá, reforçando a cena de corrida de rua da conurbação e a identidade amazônica das provas.',
    },
  ],
  culturaEsportiva:
    'A cultura esportiva santanense é puxada pela orla do Rio Amazonas e pela integração com o calendário de corrida de rua da Região Metropolitana de Macapá, com forte presença de treino ao ar livre.',
  academias:
    'A oferta reúne academias de bairro e estúdios, complementada por praças com academia ao ar livre e pela orla do Amazonas, além do acesso fácil à estrutura fitness de Macapá.',

  destaquesFitness: [
    'Orla do Rio Amazonas como principal palco de corrida, caminhada e bike.',
    'Conurbação com Macapá amplia o acesso a academias, estúdios e eventos.',
    'Calendário de corrida de rua integrado à Região Metropolitana de Macapá.',
    'Praças com academia ao ar livre como apoio gratuito ao treino nos bairros.',
  ],

  precos: {
    avulsaMin: 45,
    avulsaMax: 105,
    mensalMin: 230,
    mensalMax: 640,
    onlineMin: 105,
    onlineMax: 330,
  },

  conclusao:
    'Cidade-porto do Amapá às margens do Rio Amazonas e conurbada com Macapá, Santana combina orla para treino ao ar livre e acesso à estrutura da capital. Um personal trainer ajuda a montar uma rotina que respeite o clima equatorial e aproveite a orla e as praças da cidade com método e segurança.',

  vizinhas: ['macapa-ap'],

  fontes: [
    { nome: 'IBGE Cidades — Santana', url: 'https://cidades.ibge.gov.br/brasil/ap/santana/panorama' },
    { nome: 'Prefeitura de Santana', url: 'https://santana.ap.gov.br/' },
    { nome: 'Atlas Brasil — IDHM', url: 'https://www.atlasbrasil.org.br/' },
  ],
  atualizadoEm: '2026-06-29',
};
