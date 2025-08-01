package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/ls"
	"github.com/microsoft/typescript-go/internal/lsp/lsproto"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestJavascriptModules20(t *testing.T) {
	t.Parallel()
	t.Skip()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `// @allowJs: true
// @Filename: mod.js
function foo() { return {a: true}; }
module.exports = foo();
// @Filename: app.js
import * as mod from "./mod"
mod./**/`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyCompletions(t, "", &fourslash.CompletionsExpectedList{
		IsIncomplete: false,
		ItemDefaults: &fourslash.CompletionsExpectedItemDefaults{
			CommitCharacters: &defaultCommitCharacters,
			EditRange:        ignored,
		},
		Items: &fourslash.CompletionsExpectedItems{
			Exact: []fourslash.CompletionsExpectedItem{
				&lsproto.CompletionItem{
					Label: "a",
					Kind:  ptrTo(lsproto.CompletionItemKindField),
				},
				&lsproto.CompletionItem{
					Label:    "mod",
					Kind:     ptrTo(lsproto.CompletionItemKindText),
					SortText: ptrTo(string(ls.SortTextJavascriptIdentifiers)),
				},
			},
		},
	})
}
