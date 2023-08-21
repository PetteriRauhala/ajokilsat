# Ajokilometrit


Expolla toteutettuna sovellus toimii Androidilla ja iOS.llä, mutta tähän mennessä sovellusta on testattu vain Androidilla.

## Tietomallit

(*) = Pakollinen kenttä

### Trip (Matka)

- `vehicle` (*) - ajoneuvo, jolla matka tehtiin
- `odometerAtBegin` (*) - matkamittarin lukema matkan alussa
- `odometerAtEnd` (*) - matkamittarin lukema matkan lopussa
- `timestampAtBegin` (*) - aikaleima matkan alussa
- `timestampAtEnd` - aikaleima matkan lopussa
- `description` - matkan kuvaus
- `track` - "jälki", johon tallennetaan matkan kulku
    * Lista GPS-koordinaateista ja aikaleimoista
- `routeDescription`- reitin kuvaus (tyyliin: "Turku-Raisio-Turku")


### Vehicle (Ajoneuvo)

- `name` - Nimi
- `regisrationNumber` - rekisterinumero
