# 🧭 ENGINEERING ROADMAP
**Путь: Frontend → Backend → Data → Platform → AI Infrastructure**  
Оптимальный горизонт: **3–5 лет**. Формат — пошаговое руководство с темами, практикой и лучшими материалами.  
Рекомендуемый режим: **1–2 темы в неделю**, DSA — **ежедневно малыми дозами**.

---

## 🔹 0. DSA / Алгоритмы и структуры данных *(параллельно с самого начала)*
**Цель:** развить инженерное мышление, оценивать сложность, уверенно решать задачи.

**Темы**
- Массивы, хеш-таблицы, строки
- Стэки, очереди, кучи (heaps)
- Деревья и графы: BFS/DFS, топологическая сортировка, кратчайшие пути (обзорно)
- Интервалы, бинарный поиск, два указателя (two pointers), скользящее окно
- Big-O, амортизированная сложность

**Практика**
- 3 задачи/день (2 легкие + 1 средняя), 1 «hard» в выходные
- Вести «решебник»: идея → инвариант → сложность → частые ошибки
- Раз в месяц: mock-сессия на 2 задачи подряд с таймером

**Материалы**
- *Grokking Algorithms* — A. Bhargava
- *The Algorithm Design Manual* — S. Skiena
- NeetCode 150 / Blind 75 / LeetCode Patterns

---

## 🔹 1. Java & Core Programming
**Цель:** овладеть языком и практиками чистого, надёжного кода.

**Темы**
- JVM, Garbage Collection, Memory Model
- OOP, SOLID, Clean Code, исключения
- Streams, Generics, аннотации, рефлексия
- Многопоточность: ExecutorService, CompletableFuture
- Сборка: Gradle/Maven, управление зависимостями

**Практика**
- Мини-проект: CRUD без фреймворка + логирование + обработка ошибок
- Параллельная задача: батч‑загрузка/парсер с ExecutorService
- Unit‑тесты (JUnit), CI в GitHub Actions

**Материалы**
- *Effective Java* — J. Bloch
- *Clean Code* — R. Martin
- Baeldung Java, Java Brains (YouTube)

---

## 🔹 2. Backend Foundations (HTTP, REST, Spring, Security)
**Цель:** стать уверенным backend‑инженером, который понимает протоколы и API.**

**Темы**
- HTTP/1.1–3: методы, коды, кеш, CORS; идемпотентность
- REST vs GraphQL vs gRPC (обзор и trade‑offs)
- Безопасность: JWT, OAuth2, RBAC, подпись вебхуков
- Асинхронность: очереди, retry/backoff, идемпотентность
- Тестирование API: unit/integration/contract; CI/CD; Docker

**Практика**
- Spring Boot CRUD + JWT + Swagger (OpenAPI)
- Docker Compose: app + Postgres + Redis
- Circuit‑breaker (resilience4j), retry‑политики
- Postman/RestAssured тесты, GitHub Actions pipeline

**Материалы**
- *Spring in Action* — C. Walls
- Baeldung Spring Guides
- MDN HTTP, Swagger/OpenAPI Docs
- *High Performance Browser Networking* — I. Grigorik

---

## 🔹 3. Design Patterns & Refactoring
**Цель:** говорить на «языке архитектуры», писать расширяемые решения.**

**Темы**
- GoF: Factory, Strategy, Builder, Adapter, Facade, Template, Observer
- Enterprise/DDD: Repository, Aggregate, Domain Service, Value Object
- Integration: Circuit Breaker, Retry/Backoff, Outbox, Saga, Idempotency
- Рефакторинг к паттернам, антипаттерны

**Практика**
- 6–8 мини‑реализаций GoF (по 30–50 строк)
- Еженедельно: 1 рефакторинг рабочего/пет‑кода под паттерн + ADR
- В API: внедрить Circuit‑Breaker/Retry/Idempotency‑Key/Outbox

**Материалы**
- *Head First Design Patterns*
- *Patterns of Enterprise Application Architecture* — M. Fowler
- *Microservices Patterns* — C. Richardson
- *Refactoring* — M. Fowler

---

## 🔹 4. Databases & SQL Mastery
**Цель:** проектировать схемы и писать быстрые запросы, понимать устройство СУБД.**

**Темы**
- Моделирование: нормализация ↔ денормализация; OLTP vs OLAP
- SQL: JOIN, CTE, WINDOW FUNCTIONS, EXPLAIN/ANALYZE
- Индексы, транзакции, блокировки, ACID
- NoSQL: Mongo (документы), Redis (кеш), CAP/BASE — обзор

**Практика**
- ER‑диаграмма проекта; индексы; бенчмарки до/после
- 3 аналитических запроса ≤ 200 мс на 1e6 строк (с MV/индексами)
- Сравнение Postgres vs Mongo по latency для read‑heavy кейса

**Материалы**
- *SQL Antipatterns* — B. Karwin
- *Use The Index, Luke!* — M. Winand
- *Database Internals* — A. Petrov

---

## 🔹 5. System Design (Уровень I — основы)
**Цель:** научиться проектировать сервисы с учётом NFR (latency, throughput, availability).**

**Темы**
- Кэширование: cache‑aside, write‑through/write‑behind
- Шардирование, репликация, SLA/SLO/SLI
- HLD vs LLD, API‑контракты, схемы данных
- Прикидочные расчёты: RPS, storage, bandwidth

**Практика (1 сессия/неделю)**
- Short‑link service; Timeline feed; Realtime chat; Metrics ingestion
- C4‑диаграммы + ADR с trade‑offs, альтернативами и рисками

**Материалы**
- *System Design Interview* — Alex Xu (Vol. 1–2)
- *Designing Data‑Intensive Applications* — M. Kleppmann

---

## 🔹 6. Async & Real‑Time Fundamentals
**Цель:** освоить событийное мышление и устойчивые коммуникации.**

**Темы**
- Event loop, async/await; очереди: RabbitMQ, Kafka (вводный уровень)
- WebSocket/SSE; backpressure; retry; DLQ; идемпотентность

**Практика**
- WebSocket‑чат
- Kafka producer/consumer demo с ключами партиций
- Внедрить DLQ + backoff‑ретраи

**Материалы**
- Confluent Developer Courses (Kafka)
- Документация RabbitMQ/Kafka

---

## 🔹 7. Data Engineering Core
**Цель:** строить надёжные пайплайны от источника до витрины.**

**Темы**
- ETL vs ELT, batch vs stream
- Airflow (оркестровка), dbt (трансформации)
- Хранилища: ClickHouse/BigQuery/Redshift (обзор)
- Data Contracts, Lineage, Data Quality (Great Expectations)

**Практика**
- Airflow DAG: API → Postgres (raw) → dbt (transform) → ClickHouse (serve)
- dbt tests (not null/unique/schema) + DataHub lineage

**Материалы**
- *Fundamentals of Data Engineering* — J. Reis, M. Housley
- DataTalksClub DE Zoomcamp
- Airflow / dbt / ClickHouse Docs

---

## 🔹 8. Distributed Systems & Real‑Time Processing
**Цель:** понимать масштабирование, согласованность, обработку потоков.**

**Темы**
- CAP, консистентность, партиционирование, репликация
- Kafka internals: partitions, consumer groups, offsets
- Exactly‑once semantics; Outbox; Saga; backpressure
- Flink/Kafka Streams: оконные агрегаты, join’ы

**Практика**
- Kafka Streams/Flink: оконные агрегации (tumbling/hopping)
- Outbox + idempotency (между БД и Kafka)
- Realtime dashboard: ClickHouse MV + WebSocket API

**Материалы**
- *Site Reliability Engineering* — Google (главы SLO/SLA)
- *Designing Data‑Intensive Applications* — Kleppmann
- Flink/Kafka Streams Docs

---

## 🔹 9. Cloud & DataOps (AWS/GCP Basics)
**Цель:** уметь разворачивать и эксплуатировать data/backend‑системы в облаке.**

**Темы**
- AWS: S3, EC2, IAM, Glue, Redshift; GCP: Pub/Sub, BigQuery, Dataflow, IAM
- Terraform/IaC, Helm; Secrets; сеть и безопасность
- Cost awareness: профилирование затрат на хранение/запросы

**Практика**
- Развернуть backend + Kafka + DB в AWS/GCP (IaC)
- CI/CD: GitHub Actions → Terraform → Deploy
- Сформировать отчёт по стоимости (storage/egress/compute)

**Материалы**
- AWS Skill Builder / GCP Coursera
- *Infrastructure as Code* — K. Morris

---

## 🔹 10. Platform Engineering & Observability
**Цель:** обеспечить надёжность, мониторинг и DX для команд.**

**Темы**
- Kubernetes, Helm, Terraform (углубление)
- Observability: OpenTelemetry (traces/metrics/logs), Prometheus, Grafana, Jaeger
- Incident management: SLO/SLA, error budgets, алерты; chaos‑тесты; DR‑планы

**Практика**
- Везде внедрить OTel → Grafana/Tempo/Prometheus
- SLO‑дашборд (P95 latency, error‑rate), алерты
- Chaos‑тест (остановка брокера/БД), DR‑процедуры

**Материалы**
- *Observability Engineering* — C. Majors et al.
- *Kubernetes Up & Running* — K. Hightower
- Google SRE Book

---

## 🔹 11. AI & Data Infrastructure
**Цель:** связать данные, модели и продакшн‑инфраструктуру.**

**Темы**
- Feature Stores (Feast), эксперименты/MLflow
- Model serving (FastAPI/Spring Boot), канареечные релизы
- Векторные БД: FAISS/Weaviate/Pinecone; RAG; LLM orchestration (function calling)
- AI‑observability: latency, cost, evals, drift

**Практика**
- Pipeline: ETL → embeddings → vector DB → API (RAG demo)
- MLflow DAG + мониторинг метрик модели
- Функции‑плагины для LLM над Data API

**Материалы**
- *Practical MLOps* — N. Gift
- *Machine Learning Design Patterns* — V. Lakshmanan et al.
- MLflow/Feast/LangChain Docs

---

## 🔹 12. System Design (Уровень II — продвинутый)
**Цель:** мыслить как архитектор платформ.**

**Темы**
- CQRS, Event Sourcing; Data Mesh; Service Mesh
- API Gateway, BFF; маршрутизация и безопасность на периметре
- Trade‑offs: latency vs cost, consistency vs availability
- Архитектурные артефакты: ADR, RFC, C4

**Практика**
- Спроектировать Data Platform / Real‑Time Analytics (end‑to‑end)
- Написать RFC «Migration from Monolith to Event‑Driven System»
- Провести архитектурный ревью (pro/contra, риски, поэтапный план)

**Материалы**
- *Software Architecture: The Hard Parts* — N. Ford, M. Richards
- *Building Microservices* — S. Newman
- System Design Primer (GitHub)

---

**Темы**
- Tech writing (docs‑as‑code, ADR, RFC)
- Mentoring, code/arch‑reviews, knowledge sharing
- Product sense: оценка влияния, приоритизация
- Ethics, privacy, compliance, AI governance

**Практика**
- Ежемесячно: 2 ADR + 1 RFC
- 1 публичный доклад/статья в квартал
- Наставничество/парные ревью в команде

**Материалы**
- *Staff Engineer* — W. Larson
- *Accelerate* — N. Forsgren, J. Humble, G. Kim
- *The Manager’s Path* — C. Fournier
- Google Tech Writing Course

---

## 🔧 Итоговая последовательность
0) DSA — ежедневно, параллельно  
1) Java Core  
2) Backend (HTTP/Spring/Security/Testing/Docker/CI)  
3) Design Patterns & Refactoring  
4) Databases & SQL  
5) System Design — базовый  
6) Async & Real‑Time Fundamentals  
7) Data Engineering Core  
8) Distributed Systems & Real‑Time Processing  
9) Cloud & DataOps  
10) Platform & Observability  
11) AI & Data Infrastructure  
12) System Design — продвинутый

---

## 📌 Примечания к использованию
- Каждую тему закрепляй **минимальным артефактом**: мини‑демо, диаграмма C4, ADR или бенчмарк.
- В конце каждого квартала делай **итоговый отчёт**: чему научился, что внедрил, что пересобрал.
- Под вакансии/цели выбирай **три приоритета** на ближайшие 3–6 месяцев (например: SQL + Kafka + Observability).
