const { categoriaModel } = require('../model/categoria.model.js');

const categoriaController = {
buscarTodasCategorias: async (req, res) => {
    try {
            const resultado = await categoriaModel.buscarTodasCategorias();
            if (resultado === 0) {
                return res.status(200).json({ message: 'A tabela selecionada não tem dados nenhum' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }
    },

    buscarCategoriaPorID: async (req, res) => {
        try {
            const id = Number(req.params.idCategoria);
            if (!id || !Number.isInteger(id)) {
                res.status(400).json({ message: 'Informe um identificador(ID) válido fazendo favor' })
            }
            const resultado = await categoria
            res.status(200).json({ message: 'Ocorreu um erro no servidor', })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }
    },

    incluirCategoria: async (req, res) => {
        try {
            const { descricao, data } = req.body;

            if (!String(descricao) || descricao.length < 3 || isNaN(data)) {
                return res.status(400).json({ message: 'Dados invalidos' });
            }
            const resultado = await categoriaModel.InserirCategoria(descricao, data)

            if (resultado.affectedRows === 1 && resultado.insertId != 0) {
                res.status(201).json({ message: 'Registro incluido com sucesso', result: resultado })
            } else {
                throw new error('Ocorreu um erro ao incluir o registro');
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }
    },

    atualizarCategoria: async (req, res) => {
        try {
             const idCategoria = Number(req.params.idCategoria);
            let {descricao, valor} = req.body;
            descricao = descricao.trim();

            if(!idProduto || !descricao || !valor || typeof idCategoria !== 'number' || !isNaN(descricao) || isNaN(valor) || descricao.trim().length < 3) {
                return res.status(400).json({mesage: 'Verifique os dados enviados novamente'});
            }
            
            const produtoAtual = await produtoModel.selecionarPorId(idCategoria);
            const novaDescricao = descricao ?? produtoAtual[0].descricao;
            const novoValor = valor ?? produtoAtual[0].valor;

            const resultado = await produtoModel.alterarProduto(idProduto, novaDescricao, novoValor);

            if(resultado.changedRows === 0){
                throw new Error('Registro não localizado');
            }
        } catch (error) {
             console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }
    },

    novaCategoria: async (req, res) => {
        try {
            const novaCategoria = await categoriaModel.buscarCategoriaPorID(idCategoria, descricaoCategoria, dataCad);
            if(novaCategoria.length===0){
                throw new Error()
            }
            
        } catch (error) {
             console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor.', errorMessage: error.message });
        }
    }

    };


module.exports = { categoriaController };