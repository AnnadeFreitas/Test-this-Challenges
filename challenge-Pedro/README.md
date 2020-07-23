# Challenge Client Policy

- Implemente essas duas funcoes no mesmo arquivo
- Teste todos os cenarios de erros possiveis

Primeira função retorna o seguinte:
{
name: ""
lastname: ""
zipCode: ""
email: ""
age: 0
isOld -> true se usuario tiver mais de 60 anos
}

function register(name, lastname, zipCode, email, birthday_date (data)){
Se qualquer parametro for nulo, retorne '<nome_do_param> cant be null'

O zipcode só é válido se tiver 5 caracteres e primeiro e último caracteres sejam ímpares. Se não, retornar 'Zipcode is invalid'.

Email precisa ter um @ e precisa ter um .algumacoisa. se nao retornar 'email is invalid'.

O usuário precisa ter mais de 18 anos. Se nao retornar 'user must have more than 18 years old'.
}

A segunda função retorna o seguinte:
{
name: ""
age: ""
species: ""
humenAge: ""
isAtRisk: -> se dog > 10 anos, true. Se cat > 20 anos true
}

breeds: [large, medium, small]
species: [dog, cat, DOG, CAT, Dog, Cat]

function getPolicy(namePet, age, species, breed){

Se qualquer parametro for nulo, retorne '<nome_do_param> cant be null'

Se breed não for nenhuma das opcoes acima, retornar 'breed <breed_param> doe's not exist'

se species não for dog nem cat, retornar:
'we dont have policies for <species_param>'

Calcular idade humana:
breed small -> age _ 4 (dog)
breed medium -> age _ 5 (dog)
breed large -> age _ 7 (dog)
breed small -> age _ 2 (dog)
breed medium -> age _ 3 (dog)
breed large -> age _ 4 (dog);

Calcular isAtRisk;

}
