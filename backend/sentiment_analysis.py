class DistilRoBERTa():
    def analyze(self, classifier, text, score, count):
        alpha = 1 - (1 / count)
        output = classifier(text)
        new_score = [(1 - alpha) * output[0][i]["score"] + alpha * score[i] for i in range(7)]
        return new_score
