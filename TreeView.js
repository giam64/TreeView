


var TreeView = function() {
    
		this.ramo = function(nomeOggetto,nomeRamo,quanti){ 
									var oggetto = $("#ul_"+nomeOggetto);
									oggetto.append('<li id="li_'+nomeRamo+'"></li>');
									this.creaTitolo(nomeRamo,nomeRamo,"icon-minus-sign","badge-success","chiudi");
									this.numeroElementi(nomeRamo,quanti);
									$("#li_"+nomeRamo).append('<ul id="ul_'+nomeRamo+'"></ul>');
								};
		
		this.foglia = function(nomeOggetto,link,titolo){
										var oggetto = $("#ul_"+nomeOggetto);
										oggetto.append('<li id="li_'+titolo+'"></li>');
										$("#li_"+titolo).append( '<a href="'+link+'" target="_blank"><span class="icon-file"></span>'+titolo+'</a>');
									};
		
		this.numeroElementi = function(nomeOggetto,numero){
														var oggetto = $("#li_"+nomeOggetto);
														oggetto.append('<span><i class="icon-file"></i>'+numero+'</span>');
													};
		
		this.bottone = function(nomeOggetto,nome){
										var oggetto = $("#"+nomeOggetto);
										oggetto.append('<button id="'+nome+'"type="button" class="btn btn-default btn-sm"></button>');
										$("#"+nome).append('<span class="icon-download-alt">'+nome+'</span>');
									};
		
		this.creaTitolo = function(nomeOggetto,nome,tipo,tipoBadge,chiudi){
												// nomeOggetto => il nome del padre
												// nome        => il nome della componente che appare in video (il titolo)
												// tipo        => la classe che imposta l'icona prima del titolo
												// tipoBadge   => la classe che imposta la grafica della componente
												var oggetto = $("#li_"+nomeOggetto);
												var chiusura="";
												if (chiudi!=="") {chiusura="defaultLivello";} else {chiusura="";}
												oggetto.append('<span id="'+nome+'" class="badge '+tipoBadge+' '+chiusura+'"></span>');
												$("#"+nome).html('<i class="'+tipo+'"></i> '+nome);
											};
		
		this.creaAlbero = function(nomeContainer, nome, titolo){
												var container = $("#"+nomeContainer);
												container.append("<div id='"+nome+"' class='tree'></div>");
												$("#"+nome).append("<ul id='ul_"+titolo+"'></ul>");
												$("#ul_"+titolo).append("<li id='li_"+nome+"'></li>");
												this.creaTitolo(nome,titolo,"icon-calendar","badge-important","");
												$("#li_"+nome).append("<ul id='ul_"+nome+"'></ul>");
											};
		
		this.chiudiLivelli = function () {
													var children = $('.defaultLivello').parent('li.parent_li').find(' > ul > li');
													if (children.is(":visible")) {
														children.hide('fast');
														$('.defaultLivello').attr('title', 'Apri il ramo').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
													} else {
														children.show('fast');
														$('.defaultLivello').attr('title', 'Chiudi il ramo').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
													}
												};
		
		this.start = function () {
        $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Chiudi il ramo');
        $('.tree li.parent_li > span').on('click', function (e) {
            var children = $(this).parent('li.parent_li').find(' > ul > li');
            if (children.is(":visible")) {
                children.hide('fast');
                $(this).attr('title', 'Apri il ramo').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
            } else {
                children.show('fast');
                $(this).attr('title', 'Chiudi il ramo').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
            }
            e.stopPropagation();
        });
};
	

}


	






