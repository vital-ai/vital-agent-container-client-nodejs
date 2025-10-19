import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction
 */
export class Edge_hasKGExtraction extends Edge_hasKGEdge {
  public kGStartByteIndex?: number;
  public kGEndByteIndex?: number;
  public kGExtractTaskURI?: string;
  public kGEndTokenIndex?: number;
  public kGStartTokenIndex?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction';
  }

  /**
   * Get property definitions for Edge_hasKGExtraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStartByteIndex',
        tsPropertyName: 'kGStartByteIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEndByteIndex',
        tsPropertyName: 'kGEndByteIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExtractTaskURI',
        tsPropertyName: 'kGExtractTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEndTokenIndex',
        tsPropertyName: 'kGEndTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStartTokenIndex',
        tsPropertyName: 'kGStartTokenIndex',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGExtraction
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGExtraction';
  }
}
