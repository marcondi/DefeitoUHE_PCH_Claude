# HydroDiag v2

Diagnóstico de falhas em PCH/UHE. Página estática única (`index.html`), sem build.

## Atualizar o site
No GitHub: Add file > Upload files, envie `index.html` e `vercel.json` (sobrescreve). A Vercel publica sozinha.

## Primeiro uso (em cada aparelho)
1. Ajustes: cole a chave do Gemini, Salvar, Detectar modelos.
2. Ajustes > Sincronização: Criar conta (e-mail e senha), confirme o e-mail se pedido, depois Entrar.
3. Documentos: adicione o PDF do projeto uma vez (o texto é lido no aparelho); nos outros aparelhos ele chega pela sincronização.
4. Diagnóstico: descreva ou fale o alarme, tire foto se quiser, toque em Diagnosticar.

## Nuvem
Banco: tabelas hd_cases, hd_docs, hd_settings (RLS: cada usuário só vê os próprios dados) e bucket privado hydrodiag-files.
A chave do Gemini nunca é enviada à nuvem.

## Reverter a nuvem (SQL)
drop table public.hd_cases, public.hd_docs, public.hd_settings;
drop policy hd_files_select on storage.objects; drop policy hd_files_insert on storage.objects;
drop policy hd_files_update on storage.objects; drop policy hd_files_delete on storage.objects;
-- esvazie o bucket hydrodiag-files no painel e depois exclua o bucket.

Apoio técnico gerado por IA: confirme no desenho oficial; desenergize e bloqueie (LOTO) e siga a NR-10.
