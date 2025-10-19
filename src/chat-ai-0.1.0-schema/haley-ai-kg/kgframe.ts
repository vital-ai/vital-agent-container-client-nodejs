import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGFrame
 */
export class KGFrame extends KGNode {
  public kGFrameTypeDescription?: string;
  public kGExpressionType?: string;
  public kGTypeMethodURI?: string;
  public parentFrameURI?: string;
  public kGBeliefModeType?: string;
  public frameGraphURI?: string;
  public kGFormType?: string;
  public frameSequence?: number;
  public kGProvenanceType?: string;
  public kGFrameType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGFrame';
  }

  /**
   * Get property definitions for KGFrame
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameTypeDescription',
        tsPropertyName: 'kGFrameTypeDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExpressionType',
        tsPropertyName: 'kGExpressionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTypeMethodURI',
        tsPropertyName: 'kGTypeMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasParentFrameURI',
        tsPropertyName: 'parentFrameURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGBeliefModeType',
        tsPropertyName: 'kGBeliefModeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFrameGraphURI',
        tsPropertyName: 'frameGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFormType',
        tsPropertyName: 'kGFormType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasFrameSequence',
        tsPropertyName: 'frameSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGProvenanceType',
        tsPropertyName: 'kGProvenanceType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFrameType',
        tsPropertyName: 'kGFrameType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
