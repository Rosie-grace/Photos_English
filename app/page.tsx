"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, RotateCcw, Trophy, Target, Zap, CheckCircle, XCircle, Shuffle } from "lucide-react"

const wordDatabase = [
  // 水果类
  {
    id: 1,
    chinese: "苹果",
    image: "/red-apple-fruit.png",
    correct: "apple",
    options: ["apple", "orange", "banana", "grape"],
    category: "水果",
  },
  {
    id: 2,
    chinese: "香蕉",
    image: "/placeholder-t5b8a.png",
    correct: "banana",
    options: ["banana", "apple", "orange", "grape"],
    category: "水果",
  },
  {
    id: 3,
    chinese: "橙子",
    image: "/vibrant-orange.png",
    correct: "orange",
    options: ["orange", "apple", "lemon", "lime"],
    category: "水果",
  },
  {
    id: 4,
    chinese: "葡萄",
    image: "/grapes-fruit.png",
    correct: "grape",
    options: ["grape", "cherry", "berry", "plum"],
    category: "水果",
  },
  {
    id: 5,
    chinese: "草莓",
    image: "/red-strawberry-fruit.png",
    correct: "strawberry",
    options: ["strawberry", "raspberry", "blueberry", "cherry"],
    category: "水果",
  },
  {
    id: 6,
    chinese: "西瓜",
    image: "/green-watermelon.png",
    correct: "watermelon",
    options: ["watermelon", "melon", "pumpkin", "cucumber"],
    category: "水果",
  },
  {
    id: 7,
    chinese: "柠檬",
    image: "/yellow-lemon-citrus.png",
    correct: "lemon",
    options: ["lemon", "lime", "orange", "grapefruit"],
    category: "水果",
  },
  {
    id: 8,
    chinese: "桃子",
    image: "/pink-peach.png",
    correct: "peach",
    options: ["peach", "plum", "apricot", "cherry"],
    category: "水果",
  },

  // 动物类
  {
    id: 9,
    chinese: "猫",
    image: "/cute-cat-pet.png",
    correct: "cat",
    options: ["cat", "dog", "bird", "fish"],
    category: "动物",
  },
  {
    id: 10,
    chinese: "狗",
    image: "/placeholder-x24gj.png",
    correct: "dog",
    options: ["dog", "cat", "rabbit", "hamster"],
    category: "动物",
  },
  {
    id: 11,
    chinese: "鸟",
    image: "/placeholder-z5geq.png",
    correct: "bird",
    options: ["bird", "butterfly", "bee", "bat"],
    category: "动物",
  },
  {
    id: 12,
    chinese: "鱼",
    image: "/goldfish-swimming.png",
    correct: "fish",
    options: ["fish", "shark", "whale", "dolphin"],
    category: "动物",
  },
  {
    id: 13,
    chinese: "兔子",
    image: "/white-rabbit-bunny.png",
    correct: "rabbit",
    options: ["rabbit", "hamster", "mouse", "squirrel"],
    category: "动物",
  },
  {
    id: 14,
    chinese: "马",
    image: "/brown-horse-running.png",
    correct: "horse",
    options: ["horse", "cow", "sheep", "goat"],
    category: "动物",
  },
  {
    id: 15,
    chinese: "大象",
    image: "/gray-elephant-trunk.png",
    correct: "elephant",
    options: ["elephant", "rhino", "hippo", "giraffe"],
    category: "动物",
  },
  {
    id: 16,
    chinese: "狮子",
    image: "/placeholder.svg?height=128&width=128",
    correct: "lion",
    options: ["lion", "tiger", "leopard", "cheetah"],
    category: "动物",
  },

  // 交通工具类
  {
    id: 17,
    chinese: "汽车",
    image: "/modern-car.png",
    correct: "car",
    options: ["car", "bus", "train", "plane"],
    category: "交通工具",
  },
  {
    id: 18,
    chinese: "公交车",
    image: "/placeholder.svg?height=128&width=128",
    correct: "bus",
    options: ["bus", "car", "truck", "van"],
    category: "交通工具",
  },
  {
    id: 19,
    chinese: "火车",
    image: "/placeholder.svg?height=128&width=128",
    correct: "train",
    options: ["train", "subway", "tram", "bus"],
    category: "交通工具",
  },
  {
    id: 20,
    chinese: "飞机",
    image: "/placeholder.svg?height=128&width=128",
    correct: "plane",
    options: ["plane", "helicopter", "rocket", "drone"],
    category: "交通工具",
  },
  {
    id: 21,
    chinese: "自行车",
    image: "/placeholder.svg?height=128&width=128",
    correct: "bicycle",
    options: ["bicycle", "motorcycle", "scooter", "skateboard"],
    category: "交通工具",
  },
  {
    id: 22,
    chinese: "船",
    image: "/placeholder.svg?height=128&width=128",
    correct: "boat",
    options: ["boat", "ship", "yacht", "ferry"],
    category: "交通工具",
  },

  // 学习用品类
  {
    id: 23,
    chinese: "书",
    image: "/placeholder-3agvt.png",
    correct: "book",
    options: ["book", "pen", "paper", "desk"],
    category: "学习用品",
  },
  {
    id: 24,
    chinese: "笔",
    image: "/placeholder.svg?height=128&width=128",
    correct: "pen",
    options: ["pen", "pencil", "marker", "crayon"],
    category: "学习用品",
  },
  {
    id: 25,
    chinese: "铅笔",
    image: "/placeholder.svg?height=128&width=128",
    correct: "pencil",
    options: ["pencil", "pen", "brush", "marker"],
    category: "学习用品",
  },
  {
    id: 26,
    chinese: "橡皮",
    image: "/placeholder.svg?height=128&width=128",
    correct: "eraser",
    options: ["eraser", "ruler", "sharpener", "stapler"],
    category: "学习用品",
  },
  {
    id: 27,
    chinese: "尺子",
    image: "/placeholder.svg?height=128&width=128",
    correct: "ruler",
    options: ["ruler", "compass", "protractor", "calculator"],
    category: "学习用品",
  },
  {
    id: 28,
    chinese: "书包",
    image: "/placeholder.svg?height=128&width=128",
    correct: "backpack",
    options: ["backpack", "bag", "suitcase", "briefcase"],
    category: "学习用品",
  },

  // 建筑类
  {
    id: 29,
    chinese: "房子",
    image: "/modern-house-home.png",
    correct: "house",
    options: ["house", "tree", "car", "road"],
    category: "建筑",
  },
  {
    id: 30,
    chinese: "学校",
    image: "/placeholder.svg?height=128&width=128",
    correct: "school",
    options: ["school", "hospital", "library", "museum"],
    category: "建筑",
  },
  {
    id: 31,
    chinese: "医院",
    image: "/placeholder.svg?height=128&width=128",
    correct: "hospital",
    options: ["hospital", "clinic", "pharmacy", "school"],
    category: "建筑",
  },
  {
    id: 32,
    chinese: "商店",
    image: "/placeholder.svg?height=128&width=128",
    correct: "shop",
    options: ["shop", "store", "market", "mall"],
    category: "建筑",
  },
  {
    id: 33,
    chinese: "银行",
    image: "/placeholder.svg?height=128&width=128",
    correct: "bank",
    options: ["bank", "office", "hotel", "restaurant"],
    category: "建筑",
  },

  // 食物类
  {
    id: 34,
    chinese: "面包",
    image: "/placeholder.svg?height=128&width=128",
    correct: "bread",
    options: ["bread", "cake", "cookie", "pie"],
    category: "食物",
  },
  {
    id: 35,
    chinese: "牛奶",
    image: "/placeholder.svg?height=128&width=128",
    correct: "milk",
    options: ["milk", "water", "juice", "coffee"],
    category: "食物",
  },
  {
    id: 36,
    chinese: "鸡蛋",
    image: "/placeholder.svg?height=128&width=128",
    correct: "egg",
    options: ["egg", "cheese", "butter", "yogurt"],
    category: "食物",
  },
  {
    id: 37,
    chinese: "米饭",
    image: "/placeholder.svg?height=128&width=128",
    correct: "rice",
    options: ["rice", "noodles", "bread", "pasta"],
    category: "食物",
  },
  {
    id: 38,
    chinese: "鸡肉",
    image: "/placeholder.svg?height=128&width=128",
    correct: "chicken",
    options: ["chicken", "beef", "pork", "fish"],
    category: "食物",
  },

  // 颜色类
  {
    id: 39,
    chinese: "红色",
    image: "/placeholder.svg?height=128&width=128",
    correct: "red",
    options: ["red", "blue", "green", "yellow"],
    category: "颜色",
  },
  {
    id: 40,
    chinese: "蓝色",
    image: "/placeholder.svg?height=128&width=128",
    correct: "blue",
    options: ["blue", "red", "purple", "green"],
    category: "颜色",
  },
  {
    id: 41,
    chinese: "绿色",
    image: "/placeholder.svg?height=128&width=128",
    correct: "green",
    options: ["green", "blue", "yellow", "orange"],
    category: "颜色",
  },
  {
    id: 42,
    chinese: "黄色",
    image: "/placeholder.svg?height=128&width=128",
    correct: "yellow",
    options: ["yellow", "orange", "red", "pink"],
    category: "颜色",
  },
  {
    id: 43,
    chinese: "黑色",
    image: "/placeholder.svg?height=128&width=128",
    correct: "black",
    options: ["black", "white", "gray", "brown"],
    category: "颜色",
  },
  {
    id: 44,
    chinese: "白色",
    image: "/placeholder.svg?height=128&width=128",
    correct: "white",
    options: ["white", "black", "gray", "silver"],
    category: "颜色",
  },

  // 身体部位类
  {
    id: 45,
    chinese: "眼睛",
    image: "/placeholder.svg?height=128&width=128",
    correct: "eye",
    options: ["eye", "ear", "nose", "mouth"],
    category: "身体部位",
  },
  {
    id: 46,
    chinese: "手",
    image: "/placeholder.svg?height=128&width=128",
    correct: "hand",
    options: ["hand", "foot", "arm", "leg"],
    category: "身体部位",
  },
  {
    id: 47,
    chinese: "头",
    image: "/placeholder.svg?height=128&width=128",
    correct: "head",
    options: ["head", "face", "neck", "shoulder"],
    category: "身体部位",
  },
  {
    id: 48,
    chinese: "脚",
    image: "/placeholder.svg?height=128&width=128",
    correct: "foot",
    options: ["foot", "hand", "leg", "toe"],
    category: "身体部位",
  },

  // 天气类
  {
    id: 49,
    chinese: "太阳",
    image: "/placeholder.svg?height=128&width=128",
    correct: "sun",
    options: ["sun", "moon", "star", "cloud"],
    category: "天气",
  },
  {
    id: 50,
    chinese: "雨",
    image: "/placeholder.svg?height=128&width=128",
    correct: "rain",
    options: ["rain", "snow", "wind", "storm"],
    category: "天气",
  },
  {
    id: 51,
    chinese: "雪",
    image: "/placeholder.svg?height=128&width=128",
    correct: "snow",
    options: ["snow", "rain", "hail", "ice"],
    category: "天气",
  },
  {
    id: 52,
    chinese: "云",
    image: "/placeholder.svg?height=128&width=128",
    correct: "cloud",
    options: ["cloud", "sky", "sun", "moon"],
    category: "天气",
  },
]

export default function FlashcardPage() {
  const [currentCard, setCurrentCard] = useState(wordDatabase[0])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [learnedWords, setLearnedWords] = useState<number[]>([])

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer || showResult) return

    setSelectedAnswer(answer)
    const correct = answer === currentCard.correct
    setIsCorrect(correct)
    setShowResult(true)
    setTotalAnswered((prev) => prev + 1)

    if (correct) {
      setScore((prev) => prev + 10 + streak * 5)
      setStreak((prev) => prev + 1)
      if (!learnedWords.includes(currentCard.id)) {
        setLearnedWords((prev) => [...prev, currentCard.id])
      }
    } else {
      setStreak(0)
    }
  }

  const drawNewCard = () => {
    const availableCards = wordDatabase.filter((card) => card.id !== currentCard.id)
    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)]
    setCurrentCard(randomCard)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const resetGame = () => {
    setScore(0)
    setStreak(0)
    setTotalAnswered(0)
    setLearnedWords([])
    setSelectedAnswer(null)
    setShowResult(false)
    setCurrentCard(wordDatabase[0])
  }

  const progressPercentage = (learnedWords.length / wordDatabase.length) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-foreground font-[var(--font-space-grotesk)]">看图识英文</h1>
                <p className="text-sm text-muted-foreground font-[var(--font-dm-sans)]">© 小莎研AI | 看图识英文</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-accent">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold font-[var(--font-dm-sans)]">{score}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Zap className="w-5 h-5" />
                <span className="font-semibold font-[var(--font-dm-sans)]">{streak}</span>
              </div>
              <Button variant="outline" size="sm" onClick={resetGame}>
                <RotateCcw className="w-4 h-4 mr-2" />
                重置
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground font-[var(--font-space-grotesk)]">学习进度</h2>
            <div className="flex items-center gap-2 text-muted-foreground font-[var(--font-dm-sans)]">
              <Target className="w-4 h-4" />
              <span>
                {learnedWords.length}/{wordDatabase.length} 已掌握
              </span>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>

        {/* Main Card Area */}
        <div className="flex flex-col items-center">
          <div className="relative mb-8">
            <Card
              className={`w-80 h-96 border-2 ${showResult ? (isCorrect ? "border-green-500" : "border-red-500") : "border-border"} transition-colors duration-300`}
            >
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                <img
                  src={currentCard.image || "/placeholder.svg"}
                  alt={currentCard.chinese}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-card-foreground mb-2 font-[var(--font-space-grotesk)]">
                  {currentCard.chinese}
                </h3>
                <Badge variant="secondary" className="mb-4">
                  {currentCard.category}
                </Badge>

                {showResult && (
                  <div className="flex items-center gap-2 mt-4">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                    <span
                      className={`font-semibold ${isCorrect ? "text-green-600" : "text-red-600"} font-[var(--font-dm-sans)]`}
                    >
                      {isCorrect ? "正确！" : `错误，正确答案是 ${currentCard.correct}`}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-6">
            {currentCard.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer === option
                    ? isCorrect
                      ? "default"
                      : "destructive"
                    : showResult && option === currentCard.correct
                      ? "default"
                      : "outline"
                }
                size="lg"
                onClick={() => handleAnswerSelect(option)}
                disabled={showResult}
                className="h-16 text-lg font-semibold font-[var(--font-dm-sans)]"
              >
                {option}
              </Button>
            ))}
          </div>

          {/* Draw New Card Button */}
          {showResult && (
            <Button onClick={drawNewCard} size="lg" className="font-[var(--font-dm-sans)]">
              <Shuffle className="w-4 h-4 mr-2" />
              抽取下一张卡片
            </Button>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-card-foreground font-[var(--font-space-grotesk)]">{score}</h3>
              <p className="text-muted-foreground font-[var(--font-dm-sans)]">总分</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-card-foreground font-[var(--font-space-grotesk)]">{streak}</h3>
              <p className="text-muted-foreground font-[var(--font-dm-sans)]">连续答对</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-card-foreground font-[var(--font-space-grotesk)]">
                {totalAnswered > 0 ? Math.round((score / (totalAnswered * 10)) * 100) : 0}%
              </h3>
              <p className="text-muted-foreground font-[var(--font-dm-sans)]">正确率</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
