const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/calcular-salario', (req, res) => {
    const { salario, filhos } = req.body;

    if (!salario || !filhos) {
        return res.status(400).json({ error: 'Salário e número de filhos são obrigatórios' });
    }

    let salarioFamilia = 0;
    if (salario < 2000) {
        salarioFamilia = filhos * 45;
    }

    const salarioFinal = salario + salarioFamilia;

    return res.json({
        salarioFamilia: salarioFamilia.toFixed(2).replace('.', ','),
        salarioFinal: salarioFinal.toFixed(2).replace('.', ',')
    });

    const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar o corpo das requisições em formato JSON
app.use(express.json());

// 1. Cálculo do desconto de INSS
app.post('/desconto-inss', (req, res) => {
  const salario = req.body.salario;
  let desconto = 0;
  
  if (salario <= 1212) {
    desconto = salario * 0.075;
  } else if (salario <= 2427.35) {
    desconto = salario * 0.09;
  } else if (salario <= 3641.03) {
    desconto = salario * 0.12;
  } else if (salario <= 7087.22) {
    desconto = salario * 0.14;
  } else {
    desconto = 7087.22 * 0.14;
  }

  const salarioFinal = salario - desconto;
  res.json({ desconto, salarioFinal });
});

// 2. Classificação do Triângulo
app.post('/triangulo', (req, res) => {
  const { a, b, c } = req.body;

  if (a === b && b === c) {
    res.json({ tipo: 'Equilátero' });
  } else if (a !== b && b !== c && a !== c) {
    res.json({ tipo: 'Escaleno' });
  } else {
    res.json({ tipo: 'Isósceles' });
  }
});

// 3. Aumento no Preço da Mercadoria
app.post('/aumento-mercadoria', (req, res) => {
  const { nome, preco } = req.body;
  let aumento = preco < 1000 ? 0.05 : 0.07;
  let novoPreco = preco + (preco * aumento);

  res.json({ nome, novoPreco });
});

// 4. Maior número entre 6 valores
app.post('/maior-numero', (req, res) => {
  const numeros = req.body.numeros;
  const maior = Math.max(...numeros);
  res.json({ maior });
});

// 5. Ordem crescente de 5 números
app.post('/ordem-crescente', (req, res) => {
  const numeros = req.body.numeros;
  const ordenados = numeros.sort((a, b) => a - b);
  res.json({ ordenados });
});

// 6. Maior e menor entre dois números
app.post('/maior-menor', (req, res) => {
  const { num1, num2 } = req.body;
  const maior = Math.max(num1, num2);
  const menor = Math.min(num1, num2);
  res.json({ maior, menor });
});

// 7. Reajuste Salarial
app.post('/reajuste-salarial', (req, res) => {
  const salarioAtual = req.body.salario;
  let aumento = 0;

  if (salarioAtual >= 1500 && salarioAtual < 1750) {
    aumento = 0.15;
  } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
    aumento = 0.12;
  } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
    aumento = 0.09;
  } else if (salarioAtual >= 3000) {
    aumento = 0.06;
  }

  const novoSalario = salarioAtual * (1 + aumento);
  res.json({ novoSalario });
});

// 8. Situação do Aluno
app.post('/situacao-aluno', (req, res) => {
  const { nota1, nota2, nota3 } = req.body;
  const media = (nota1 + nota2 + nota3) / 3;
  
  let situacao = '';
  if (media >= 6) {
    situacao = 'Aprovado';
  } else if (media >= 4) {
    situacao = 'Recuperação';
  } else {
    situacao = 'Reprovado';
  }

  res.json({ media, situacao });
});

// 9. Desconto na Venda
app.post('/desconto-venda', (req, res) => {
  const { produto, preco } = req.body;
  let desconto = 0;

  if (produto === 'camisa') {
    desconto = 0.20;
  } else if (produto === 'bermuda') {
    desconto = 0.10;
  } else if (produto === 'calça') {
    desconto = 0.15;
  }

  const valorDesconto = preco * desconto;
  const precoFinal = preco - valorDesconto;

  res.json({ produto, precoFinal });
});

});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
