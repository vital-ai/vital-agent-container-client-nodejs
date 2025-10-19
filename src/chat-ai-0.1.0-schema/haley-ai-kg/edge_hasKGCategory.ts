import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCategory
 */
export class Edge_hasKGCategory extends Edge_hasKGEdge {
  public kGAgentRankingScoreUpdateDateTime?: string | Date;
  public kGAgentRankingScore?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCategory';
  }

  /**
   * Get property definitions for Edge_hasKGCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScoreUpdateDateTime',
        tsPropertyName: 'kGAgentRankingScoreUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentRankingScore',
        tsPropertyName: 'kGAgentRankingScore',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGCategory
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCategory';
  }
}
