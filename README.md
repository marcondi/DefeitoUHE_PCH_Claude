# HydroDiag v2

Diagnóstico de falhas em PCH/UHE. Página estática única (`index.html`), sem build.

## Atualizar o site
No GitHub: Add file > Upload files, envie `index.html` e `vercel.json` (sobrescreve). A Vercel publica sozinha.

## Primeiro uso (em cada aparelho)
1. Ajustes: cole a chave do Gemini, Salvar, Detectar modelos.
2. Ajustes > Sincronização: Criar conta (e-mail e senha), confirme o e-mail se pedido, depois Entrar.
3. Documentos: adicione o PDF do projeto uma vez (o texto é lido no aparelho); nos outros aparelhos ele chega pela sincronização.
4. Diagnóstico: descreva ou fale o alarme, tire foto se quiser, toque em Diagnosticar.

## Login com Google / link por e-mail
No painel do Supabase: Authentication > URL Configuration > Redirect URLs, adicione o endereço do site (ex.: https://SEU-SITE.vercel.app/**).

## OCR automático (PDFs só com desenho vetorial)
Ao adicionar um PDF sem texto e com mais de 12 páginas, o app faz OCR sozinho (tesseract.js), com progresso, pausa e retomada. Use o PC e mantenha a aba aberta; o texto pronto sincroniza com os outros aparelhos. Desligue em Ajustes se preferir.

## PDF sem texto selecionável: importar texto pronto
Documentos > botão 📥 do PDF > escolha o JSON de texto gerado por OCR. A busca local passa a funcionar e o texto sincroniza com os outros aparelhos.

## Nuvem
Banco: tabelas hd_cases, hd_docs, hd_settings (RLS: cada usuário só vê os próprios dados) e bucket privado hydrodiag-files.
A chave do Gemini nunca é enviada à nuvem.

## Reverter a nuvem (SQL)
drop table public.hd_cases, public.hd_docs, public.hd_settings;
drop policy hd_files_select on storage.objects; drop policy hd_files_insert on storage.objects;
drop policy hd_files_update on storage.objects; drop policy hd_files_delete on storage.objects;
-- esvazie o bucket hydrodiag-files no painel e depois exclua o bucket.

Apoio técnico gerado por IA: confirme no desenho oficial; desenergize e bloqueie (LOTO) e siga a NR-10.

## Novidades (v2.2.0)
- Visualizador de desenho em canvas, com zoom, deslizar entre páginas e destaque do TAG.
- Conferência automática: cada citação mostra ✔ (TAG achado na página), ⚠ (não achado) ou ⛔ (página inexistente).
- 🧭 Passo a passo de campo: checklist de segurança, depois cada passo com OK/Diferente, valor medido e observação. "Diferente" pode perguntar ao chat.
- 🕘 Casos similares ao digitar a falha, com a solução já aplicada e contagem de recorrência (90 dias).
- Modo offline: sem internet, mostra as páginas encontradas pela busca local. O app instala na tela inicial (PWA).
- Recursos de OCR (📥 e 🔍) continuam como antes.

Arquivos novos: manifest.webmanifest, sw.js, icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png.
