import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify"

import { CreateNutritionController } from "./controllers/CreateNutritionContoller"

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    let responseText = "```json\n{\n  \"nome\": \"Willian\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 25,\n  \"altura\": 1.87,\n  \"peso\": 115,\n  \"objetivo\": \"Perder peso\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"1 fatia de pao integral\",\n        \"1 ovo cozido\",\n        \"1/2 abacate\",\n        \"1 copo de leite desnatado\",\n        \"1 colher de sopa de chia\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n        \"alimentos\": [\n          \"1 iogurte grego natural\",\n          \"1/2 banana\",\n          \"2 colheres de sopa de granola\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 concha de arroz integral\",\n        \"1 concha de feijao preto\",\n        \"Salada verde com tomate e cenoura ralada\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 Maça\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 batata doce pequena\",\n        \"1 xícara de brócolis\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da noite\",\n        \"alimentos\": [\n          \"1 copo de leite de amendoas\"\n        ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteina do soro do leite\",\n    \"Creatina\",\n    \"Glutamina\",\n    \"Multivitaminico\"\n  ]\n}\n```"


    try {
      // extratr o JSON
      let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

      let jsonObject = JSON.parse(jsonString)

      return reply.send({data: jsonObject})

    } catch(err) {
      console.log(err) 
      
    }

    reply.send({ ok: true })
  })

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutritionController().handle(request, reply)
    }
  )
}
