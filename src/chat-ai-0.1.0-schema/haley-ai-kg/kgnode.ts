import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNode
 */
export class KGNode extends VITAL_Node {
  public kGTenantIdentifier?: string;
  public kGDataHash?: string;
  public kGGraphAssertionDateTime?: string | Date;
  public kGActionTypeList?: string;
  public kGNodeCacheDateTime?: string | Date;
  public kGReferentURI?: string;
  public kGIndexStatusURI?: string;
  public kGModelVersion?: string;
  public kGRefURI?: string;
  public kGValidTypeURI?: string;
  public kGJSON?: string;
  public kGraphDescription?: string;
  public kGIdentifier?: string;
  public kGVersion?: string;
  public kGIndexDateTime?: string | Date;
  public kGChatInteractionGraphURI?: string;
  public kGActionTypeSummaryDateTime?: string | Date;
  public kGVisualStyleJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGNode';
  }

  /**
   * Get property definitions for KGNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier',
        tsPropertyName: 'kGTenantIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDataHash',
        tsPropertyName: 'kGDataHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGGraphAssertionDateTime',
        tsPropertyName: 'kGGraphAssertionDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeList',
        tsPropertyName: 'kGActionTypeList',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNodeCacheDateTime',
        tsPropertyName: 'kGNodeCacheDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGReferentURI',
        tsPropertyName: 'kGReferentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexStatusURI',
        tsPropertyName: 'kGIndexStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion',
        tsPropertyName: 'kGModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRefURI',
        tsPropertyName: 'kGRefURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGValidTypeURI',
        tsPropertyName: 'kGValidTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGJSON',
        tsPropertyName: 'kGJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGraphDescription',
        tsPropertyName: 'kGraphDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIdentifier',
        tsPropertyName: 'kGIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVersion',
        tsPropertyName: 'kGVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDateTime',
        tsPropertyName: 'kGIndexDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionGraphURI',
        tsPropertyName: 'kGChatInteractionGraphURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActionTypeSummaryDateTime',
        tsPropertyName: 'kGActionTypeSummaryDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVisualStyleJSON',
        tsPropertyName: 'kGVisualStyleJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
