// permissions.js
/**
 * Lista de permissões específicas para cada setor.
 * Você pode expandir ou personalizar as permissões conforme necessário.
 */

const permissions = {
    suporteTecnico: [
      'gerenciarTickets',
      'visualizarRelatorios',
      'atualizarSoftware',
    ],
    comercial: [
      'gerenciarPropostas',
      'visualizarVendas',
      'acessarClientes',
    ],
    financeiro: [
      'visualizarRelatoriosFinanceiros',
      'gerenciarFluxoDeCaixa',
      'aprovarPagamentos',
    ],
  };
  
  export default permissions;