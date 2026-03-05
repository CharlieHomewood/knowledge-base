<%* let title = await tp.system.prompt("Note Title: "); await tp.file.rename(title); -%>---
title: <% title %>
draft: false
tags:
---
<% tp.file.cursor(1) %><%* app.workspace.activeLeaf.view.editor?.focus(); %>

---
## References

1. 