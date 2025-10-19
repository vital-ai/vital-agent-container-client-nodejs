import { Edge_hasKGRefEdge } from './edge_hasKGRefEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRefRelation
 */
export class Edge_hasKGRefRelation extends Edge_hasKGRefEdge {
  public kGRelationTypeDescription?: string;
  public kGRelationType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRefRelation';
  }

  /**
   * Get property definitions for Edge_hasKGRefRelation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRelationTypeDescription',
        tsPropertyName: 'kGRelationTypeDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRelationType',
        tsPropertyName: 'kGRelationType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGRefRelation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRefRelation';
  }
}
