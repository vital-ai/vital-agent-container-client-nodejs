import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelationMention
 */
export class Edge_hasKGRelationMention extends Edge_hasKGEdge {
  public kGRelationTypeDescription?: string;
  public kGRelationType?: string;
  public kGExtractTaskURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelationMention';
  }

  /**
   * Get property definitions for Edge_hasKGRelationMention
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExtractTaskURI',
        tsPropertyName: 'kGExtractTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGRelationMention
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGRelationMention';
  }
}
