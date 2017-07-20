
(function(){
    'strict';

    var InitSurvey = function(surveyLink, parameters){
        this.surveyLink = surveyLink;
        this.parameters = parameters;
        this.scriptID = this.id();
        var existingScript = document.getElementById(this.scriptID);
        if(existingScript) existingScript.parentNode.removeChild(existingScript);
        this.createScript();
    };

    InitSurvey.prototype.createScript = function(){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = this.scriptID;
        script.src = this.buildSrc();
        document.querySelector('head').appendChild(script);
    };
    InitSurvey.prototype.id = function(){
        return this.surveyLink.split('?').pop().split('&')[0].split('=').pop();
    };
    InitSurvey.prototype.buildSrc = function(){
        var params = this.parameters;
        return this.surveyLink + '&' + Object.keys(params).map(
                function(key){return key+ '=' + params[key]}
            ).join('&')
    };

    // no edit above this point

    new InitSurvey(
        'https://survey.euro.confirmit.com/wix/intercept-survey.aspx?projectId=p1858899394&v=1062',
        {
            longTimeSpentOnSite: !!{{longTimeSpentOnSite}},
            triedToLeave: !!{{triedToLeave}}
        }
    );
})();
