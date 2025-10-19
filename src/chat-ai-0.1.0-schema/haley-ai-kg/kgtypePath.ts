import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTypePath
 */
export class KGTypePath extends VITAL_Node {
  public kGFileType?: string;
  public kGCategoryType?: string;
  public kGRelationType?: string;
  public kGQueryKGMetaType?: string;
  public kGQueryProvenanceURI?: string;
  public kGFrameType?: string;
  public kGQuerySubtypeExpansion?: boolean;
  public kGEntityType?: string;
  public kGType?: string;
  public kGSlotType?: string;
  public kGInteractionType?: string;
  public kGEventType?: string;
  public kGDocumentType?: string;
  public kGQuerySubclassExpansion?: boolean;
  public kGCalendarEventType?: string;
  public kGTaskType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTypePath';
  }

  /**
   * Get property definitions for KGTypePath
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGFileType',
        tsPropertyName: 'kGFileType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCategoryType',
        tsPropertyName: 'kGCategoryType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRelationType',
        tsPropertyName: 'kGRelationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryKGMetaType',
        tsPropertyName: 'kGQueryKGMetaType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGQueryProvenanceURI',
        tsPropertyName: 'kGQueryProvenanceURI',
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGQuerySubtypeExpansion',
        tsPropertyName: 'kGQuerySubtypeExpansion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityType',
        tsPropertyName: 'kGEntityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGType',
        tsPropertyName: 'kGType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSlotType',
        tsPropertyName: 'kGSlotType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType',
        tsPropertyName: 'kGInteractionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEventType',
        tsPropertyName: 'kGEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType',
        tsPropertyName: 'kGDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGQuerySubclassExpansion',
        tsPropertyName: 'kGQuerySubclassExpansion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCalendarEventType',
        tsPropertyName: 'kGCalendarEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaskType',
        tsPropertyName: 'kGTaskType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
