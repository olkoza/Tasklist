Tasklist
=========
Für die Implementierung der Aufgabe habe ich mich für die Verwendung folgender Bibliotheken und Frameworks entschieden 
-AngularJS 
-JERSEY 
-Bootstrap 
-GSON 

Mit Angular und Jersey habe ich bisher noch nicht gearbeitet, habe mich aber trotzdem für diese entschieden, um mich 
einzuarbeiten, und so auch einen persönlichen Nutzen aus der Aufgabe zu ziehen. Daher die entsprechend lange Bearbeitungszeit. 
Durch Angular ließ sich sehr schön das MVC Prinzip umsetzen, und auch von Jersey war ich sehr angetan. Ebenfalls neu war mir 
die Oberflächengestaltung mit Bootstrap, hier hat mich überzeugt, dass ich schnell mithilfe eines Themes 
von http://bootswatch.com/, welches ich dann an meine Bedürfnisse anpasste, zufriedenstellende Ergebnisse erzielen konnte. 

Auf folgendes habe ich verzichtet: Logging, Internationalisierung, Unit Tests und eventuelle Erweiterbakeit des Datenmodells. 
Dies hätte völlig meinen zeitlichen Rahmen gesprengt. Mit Außnahme der Tests, die ich als sehr wichtig erachte, spielte hier 
allerdings nicht nur der Zeitfaktor eine Rolle. Ich halte es hier mit dem Grundsatz der agilen Softwareentwicklung, Dinge 
erst umzusetzen, wenn sie nötig werden, bzw. es absehbar ist, dass sie nötig werden werden. Ein Beispiel liefert die 
Klasse Task.java. Hier hätte ich jetzt schon mit einem Interface arbeiten können, um eine spätere Erweiterung um andere 
Aufgabentypen einfacher zu gestalten. Da dies aber nicht abzusehen ist, wäre das zum jetzigen Punkte verchwendete Zeit. 
Sollte solch eine Erweiterung nötig werden, kann diese dann so angelegt werden, dass spätere Erweiterungen in die gleiche 
Richtung keinen Mehraufwand bedeuten. 

Kommentiert habe ich nicht vollständig, da meiner Meinung nach gut lesbarer Code gut kommentiertem Code vorzuziehen ist.
Insofern denke ich, dass Zeit immer besser in entsprechendes Refactoring als ins Kommentieren investiert ist. Eines meiner 
Lieblingszitate dazu: "Guter Code liest sich wie eine Geschichte." Hinzu kommt, dass Kommentare bei jeder Änderung dem Code 
angepasst werden müssen. 

Entwickelt habe ich mit Eclipse Luna, zum Testen habe ich den Apache Tomcat verwendet. Wird die Anwendung ausgeführt, 
sollte sie unter "http://localhost:8080/Tasklist/#/tasks" zu erreichen sein. Wird sie unter anderer Adresse ausgeführt, 
muss die hart codierte URL in der "taskService.js" angepasst werden. 

Letztendlich habe ich beim Verwenden von Inhalten darauf geachtet, keine urheberrechtlich Geschützten zu verwenden, deshalb steht das Projekt unter der MIT License.

Ole Kozaczenko
