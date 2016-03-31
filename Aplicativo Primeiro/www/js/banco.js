var dbNome = "appost.db";
var dbVersao = "1.0";
var dbDescricao = "Appost DB";
var dbSize = 50*1024*1024;

var db = null;

$(document).ready(function () { 
   // db = window.sqlitePlugin.openDatabase({name: dbNome});
    db = window.openDatabase( dbNome, dbVersao, dbDescricao, dbSize);
    db.transaction(function(tx) {
     /*   
        tx.executeSql('DROP TABLE IF NOT EXISTS eleitor');
        tx.executeSql('DROP TABLE IF NOT EXISTS contato');
        tx.executeSql('DROP TABLE IF NOT EXISTS endereco');
        tx.executeSql('DROP TABLE IF NOT EXISTS veiculo');
        tx.executeSql('DROP TABLE IF NOT EXISTS redesocial');
        tx.executeSql('DROP TABLE IF NOT EXISTS reivindicacao');
        tx.executeSql('DROP TABLE IF NOT EXISTS compromisso');
        tx.executeSql('DROP TABLE IF NOT EXISTS indicado');
        tx.executeSql('DROP TABLE IF NOT EXISTS forum');
        tx.executeSql('DROP TABLE IF NOT EXISTS rede');
        tx.executeSql('DROP TABLE IF NOT EXISTS mensagem');
        */
        tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario (CPF_Usuario TEXT PRIMARY KEY, Nome_Usuario TEXT, Telefone_Usuario TEXT, Email_Usuario TEXT, Senha_Usuario TEXT, Login_Usuario TEXT'); 
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS Ocorrencia (id_Ocorrencia INTEGER PRIMARY KEY AUTOINCREMENT, Tipo_Ocorrencia TEXT, Data_Ocorrencia DATE, Hora_Ocorrencia TIME, Descricao_Ocorrencia TEXT, Latitude_Ocorrencia TEXT, Longitude_Ocorrencia TEXT, Anonimato_Ocorrencia BOOLEAN, Notificacoes_Ocorrencia BOOLEAN'); 
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS Evidencias (id_Evidencias INTEGER PRIMARY KEY, Tipo_Evidencia TEXT, Arquivo_Evidencia BLOB, NomeArquivo_Evidencia TEXT'); 
        
       /* tx.executeSql('CREATE TABLE IF NOT EXISTS marketing (ideleitor INTEGER PRIMARY KEY, placa TEXT, adesivo TEXT)'); 
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS redesocial (ideleitor INTEGER PRIMARY KEY, facebook TEXT, twitter TEXT, instagram TEXT, snapchat TEXT)'); 
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS reivindicacao (id INTEGER PRIMARY KEY AUTOINCREMENT, ideleitor INTEGER, conteudo TEXT)'); 
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS compromisso (id INTEGER PRIMARY KEY AUTOINCREMENT, ideleitor INTEGER, conteudo TEXT)');
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS indicado (id INTEGER PRIMARY KEY AUTOINCREMENT, ideleitor INTEGER, celular TEXT, nome TEXT, email TEXT, status TEXT)');
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS forum (idforum INTEGER PRIMARY KEY, assunto TEXT, descricao TEXT, foto TEXT, favorito TEXT, ativo TEXT, datadecriacaoformatada TEXT, nummensagens INTEGER, numparticipantes INTEGER, apagavel TEXT, tipo TEXT)');
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS mensagem (idmensagem INTEGER PRIMARY KEY, ideleitor INTEGER, idforum INTEGER, proprietario TEXT, nomeemissor TEXT, conteudo TEXT, datadecriacaoformatada TEXT, foto TEXT, valida TEXT, conclusao TEXT, apagavel TEXT)');

        tx.executeSql('CREATE TABLE IF NOT EXISTS rede (idrede INTEGER PRIMARY KEY, ideleitor INTEGER, nome TEXT, confirmado TEXT, confirmacoes INTEGER, convites INTEGER)'); */       
        
    }, function(err) {
        console.log('Open database ERROR: ' + JSON.stringify(err));
    });
});