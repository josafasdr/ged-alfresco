define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "dijit/_TemplatedMixin",
        "dojo/text!./html/HelloWorld.html"
    ],
    function(declare, _WidgetBase, Core, _TemplatedMixin, template) {
        return declare(
        		[_WidgetBase, Core, _TemplatedMixin],
        		{
        			templateString: template,
        			i18nRequirements: [ {i18nFile: "./i18n/HelloWorld.properties"} ],
        			cssRequirements: [{cssFile:"./css/HelloWorld.css"}],
            
		            postMixInProperties: function tutorial_HelloWorld__postMixInProperties() {
		                this.greeting = this.message('greeting-label');
//		                this.inherited(arguments);
		            }
        		}
        );
});