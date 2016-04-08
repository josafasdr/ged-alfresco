define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "alfresco/core/Core",
        "dojo/text!./html/Notificacao.html"
        ],
	function(declare, _WidgetBase, _TemplatedMixin, Core, template) {
		return declare(
				[_WidgetBase, _TemplatedMixin, Core],
				{
					templateString: template,
					i18nRequirements: [{ i18nFile: "./i18n/Notificacao.properties" }],
					cssRequirements: [{ cssFile: "./css/Notificacao.css" }],
					
					mostrarNotificacao: function tutorial_Notificacao__mostrarNotificacao() {
						this.greeting = this.message('notificacao-label');
					}
				}
		);
});