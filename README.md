# HydroDiag AI

Diagnóstico eletromecânico e de supervisório para PCH/UHE, com Google Gemini. Página estática única (`index.html`), sem build.

## Publicar
1. GitHub: criar repositório **privado** e enviar estes 3 arquivos (Add file > Upload files).
2. Vercel: Add New > Project > importar o repositório > Framework "Other", sem comando de build > Deploy.
3. Cada novo envio ao GitHub publica de novo.

## Uso
- Abra o endereço HTTPS no celular, cole a chave da API Gemini (aistudio.google.com/apikey) e clique em Salvar chave.
- Câmera e microfone só funcionam em HTTPS (ou localhost).
- A chave fica no navegador do aparelho. Nunca coloque a chave no código ou no repositório.
- PDFs, casos, índice e catálogo ficam no IndexedDB do navegador do aparelho (nada é enviado ao servidor de hospedagem).
- No Google Cloud, restrinja a chave ao endereço publicado (referenciador HTTP).

## Aviso
Apoio técnico gerado por IA. Confirme bornes, folhas e revisão no projeto oficial. Desenergize e bloqueie (LOTO) e siga a NR-10 antes de qualquer teste.
