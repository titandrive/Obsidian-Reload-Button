const { Plugin, Notice } = require("obsidian");

// A sidebar button that runs Obsidian's own "Reload app without saving" command. The icon spins first:
// the reload itself tears down the window, so the spin starts just before it.
module.exports = class ReloadButton extends Plugin {
	onload() {
		const button = this.addRibbonIcon("refresh-cw", "Reload app without saving", () => {
			if (!this.app.commands.findCommand("app:reload")) { new Notice("Reload isn't available here."); return; }
			button.addClass("reload-button-spinning");
			window.setTimeout(() => this.app.commands.executeCommandById("app:reload"), 450);
		});
	}
};
