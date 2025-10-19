import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation
 */
export class Edge_hasKGRelation extends Edge_hasKGEdge {
  public kGRelationTypeDescription?: string;
  public kGRelationType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation';
  }

  /**
   * Get property definitions for Edge_hasKGRelation
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
   * Get the VitalSigns type URI for Edge_hasKGRelation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelation';
  }
}
